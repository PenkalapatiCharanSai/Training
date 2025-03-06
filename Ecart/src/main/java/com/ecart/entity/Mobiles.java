package com.ecart.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Mobiles {
	
	@Id
	private int id;
	private String name;
	private double cost;
	private String image_url;
	private int qty;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getCost() {
		return cost;
	}
	public void setCost(double cost) {
		this.cost = cost;
	}
	public String getImage_url() {
		return image_url;
	}
	public void setImage_url(String image_url) {
		this.image_url = image_url;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	
	
	@Override
	public String toString() {
		return "Mobiles [id=" + id + ", name=" + name + ", cost=" + cost + ", image_url=" + image_url + ", qty=" + qty
				+ "]";
	}
	public Mobiles() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Mobiles(int id, String name, double cost, String image_url, int qty) {
		super();
		this.id = id;
		this.name = name;
		this.cost = cost;
		this.image_url = image_url;
		this.qty = qty;
	}
	
	
	
	
	
}
