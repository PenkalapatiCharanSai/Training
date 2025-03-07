package com.ecart.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Watches {
	@Id
	private int id;
	private String watch1;
	private int cost; 
	private String image;
	private int qty;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getWatch1() {
		return watch1;
	}
	public void setWatch1(String watch1) {
		this.watch1 = watch1;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public int getQyt() {
		return qty;
	}
	public void setQyt(int qyt) {
		this.qty = qty;
	}
	@Override
	public String toString() {
		return "Watches [id=" + id + ", watch1=" + watch1 + ", cost=" + cost + ", image=" + image + ", qty=" + qty
				+ "]";
	}
	public Watches() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Watches(int id, String watch1, int cost, String image, int qty) {
		super();
		this.id = id;
		this.watch1 = watch1;
		this.cost = cost;
		this.image = image;
		this.qty = qty;
	}
	
	
}
