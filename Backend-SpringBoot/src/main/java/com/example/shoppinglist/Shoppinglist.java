package com.example.shoppinglist;

import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.bind.DefaultValue;

import java.sql.Date;
import java.time.LocalDate;


@Entity
@Table(name = "ShoppingListTable")
public class Shoppinglist {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "product")
    private String product;

    @Column(name = "weekday")
    private String weekday;

    @Column(name = "isDone")
    private boolean isDone;


    public Shoppinglist(String product,String weekday, Boolean isDone) {
        super();
        this.product = product;
        this.weekday = weekday;
        this.isDone = isDone;
    }

    public long getId() {
        return id;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getWeekday() {
        return weekday;
    }

    public void setWeekday(String weekday) {
        this.weekday = weekday;
    }
    public Boolean getIsDone(){
        return isDone;
    }
    public void setIsDone(Boolean isDone){
        this.isDone = isDone;
    }
    public Shoppinglist(){}


}
