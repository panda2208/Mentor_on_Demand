package com.example.demo;

import java.util.Date;

public class UserDtls extends AuditModel {
	
	private static final long serialversionUID = 1L;
	
	private long id;
	private String userName="";
	private String password;
	private String firstName="";
	private String lastName="";
	private Long contactNumber;
	private String regCode;
	private String role;
	private String linkedinUrl;
	private String email;

	public void setEmail(String email) {
		this.email = email;
	}
	private float yearOfExperience;
	private Boolean active= false;
	private Boolean confirmedSignUp= false;
	private Date resetPasswordDate;
	private Boolean resetPassword = false;
	
	
	public String getEmail() {
		return email;
	}
	public long getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public Long getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(Long contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getRegCode() {
		return regCode;
	}
	public void setRegCode(String regCode) {
		this.regCode = regCode;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getLinkedinUrl() {
		return linkedinUrl;
	}
	public void setLinkedinUrl(String linkedinUrl) {
		this.linkedinUrl = linkedinUrl;
	}
	public float getYearOfExperience() {
		return yearOfExperience;
	}
	public void setYearOfExperience(float yearOfExperience) {
		this.yearOfExperience = yearOfExperience;
	}
	public Boolean getActive() {
		return active;
	}
	public void setActive(Boolean active) {
		this.active = active;
	}
	public Boolean getConfirmedSignUp() {
		return confirmedSignUp;
	}
	public void setConfirmedSignUp(Boolean confirmedSignUp) {
		this.confirmedSignUp = confirmedSignUp;
	}
	public Date getResetPasswordDate() {
		return resetPasswordDate;
	}
	public void setResetPasswordDate(Date resetPasswordDate) {
		this.resetPasswordDate = resetPasswordDate;
	}
	public Boolean getResetPassword() {
		return resetPassword;
	}
	public void setResetPassword(Boolean resetPassword) {
		this.resetPassword = resetPassword;
	}
	public static long getSerialversionuid() {
		return serialversionUID;
	}

}
