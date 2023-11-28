package com.example.shoppinglist;

import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.bind.DefaultValue;

import java.sql.Date;


@Entity
@Table(name = "ShoppingListTable")
public class Shoppinglist {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "product")
    private String product;

    @Column(name = "date")
    private Date date;

    @Column(name = "isDone")
    private boolean isDone;


    public Shoppinglist(String product,Date date, Boolean isDone) {
        super();
        this.product = product;
        this.date = date;
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
    public Boolean getIsDone(){
        return isDone;
    }
    public void setIsDone(Boolean isDone){
        this.isDone = isDone;
    }
    public Shoppinglist(){}


}
