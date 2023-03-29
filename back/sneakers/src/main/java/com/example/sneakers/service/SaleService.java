package com.example.sneakers.service;

import com.example.sneakers.entities.Cart;
import com.example.sneakers.entities.Detail;
import com.example.sneakers.entities.Sale;
import com.example.sneakers.repository.SaleRepository;
import com.example.sneakers.repository.UserRepository;
import com.example.sneakers.user.User;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@Service
@Transactional
@AllArgsConstructor
public class SaleService {
    private SaleRepository saleRepository;
    private UserRepository userRepository;
    private CartService cartService;
    private DetailService detailService;

    public List<Sale> listClientSales(String clientName){
        return saleRepository.findByClientName(clientName);
    }

    public void createSale(String clientEmail){
        User client = userRepository.getByEmail(clientEmail);
        List<Cart> cartList = cartService.getListByEmail(client.getEmail());

        DecimalFormat decimalFormat = new DecimalFormat("0.00", new DecimalFormatSymbols(Locale.US));
        decimalFormat.setRoundingMode(RoundingMode.DOWN);
        double total = cartList.stream().mapToDouble(cartItem -> cartItem.getProduct().getPrice()
        * cartItem.getAmount()).sum();

        Sale sale = new Sale(Double.parseDouble(decimalFormat.format(total)), new Date(), client);
        Sale saleSave = saleRepository.save(sale);

        for(int i = 0; i < cartList.size(); i++){
            Detail detail = new Detail();
            detail.setProduct(cartList.get(i).getProduct());
            detail.setAmount(cartList.get(i).getAmount());
            detail.setSale(saleSave);

            detailService.createDetail(detail);
        }

        cartService.cleanCartList(client.getId());
    }

}
