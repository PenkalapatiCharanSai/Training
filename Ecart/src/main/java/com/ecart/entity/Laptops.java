package com.ecart.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Laptops {
	@Id
	private int id;
	private String pname;
	private double pcost;
	private String pimage;
	private int qty;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public double getPcost() {
		return pcost;
	}
	public void setPcost(double pcost) {
		this.pcost = pcost;
	}
	public String getPimage() {
		return pimage;
	}
	public void setPimage(String pimage) {
		this.pimage = pimage;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	@Override
	public String toString() {
		return "Laptops [id=" + id + ", pname=" + pname + ", pcost=" + pcost + ", pimage=" + pimage + ", qty=" + qty
				+ "]";
	}
	
	
	
	public Laptops() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Laptops(int id, String pname, double pcost, String pimage, int qty) {
		super();
		this.id = id;
		this.pname = pname;
		this.pcost = pcost;
		this.pimage = pimage;
		this.qty = qty;
	}
	
	
}
