package com.example.demo;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

	
	@Entity
	@Table(name ="mentor")
	public class Mentor {
		
		@Id
		@GeneratedValue(strategy= GenerationType.IDENTITY)
		private Integer id;
		
		@Column(name="user_name")
		private String userName;
		
		@Column(name="password")
		private String password;
		
		@Column(name="first_name")
		private String firstName;
		
		@Column(name="last_name")
		private String lastName;
		

		@Column(name="contact_number")
		private Long contactNumber;
		
		@Column(name="reg_code")
		private String regCode="";
		
		@Column(name="role")
		private String role="mentor";
		
		@Column(name="linkedin_url")
		private String linkedinUrl;
		
		@Column(name="years_of_experience")
		private Float yearsOfExperience;
		
		
		@Column(name="rating")
		private String rating;
		
		@Column(name="timezone")
		private String timeZone;
		
		
		@Column(name="active")
		private Boolean active =true;
		
		@Column(name="confirmed_signup")
		private Boolean confirmedSignUp=true;
		
		@Column(name="reset_password")
		private Boolean resetPassword=false;
		
		@Column(name="reset_password_date")
		private Date resetPasswordDate;
		
		
		@OneToMany(fetch = FetchType.LAZY, mappedBy = "mentor")
		List<Training> trainings;

		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
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

		public String getLinkeddinUrl() {
			return linkedinUrl;
		}

		public void setLinkeddinUrl(String linkedinUrl) {
			this.linkedinUrl = linkedinUrl;
		}

		public Float getYearsOfExperience() {
			return yearsOfExperience;
		}

		public void setYearsOfExperience(Float yearsOfExperience) {
			this.yearsOfExperience = yearsOfExperience;
		}

		public String getRating() {
			return rating;
		}

		public void setRating(String rating) {
			this.rating = rating;
		}

		public String getTimeZone() {
			return timeZone;
		}

		public void setTimeZone(String timeZone) {
			this.timeZone = timeZone;
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

		public Boolean getResetPassword() {
			return resetPassword;
		}

		public void setResetPassword(Boolean resetPassword) {
			this.resetPassword = resetPassword;
		}

		public Date getResetPasswordDate() {
			return resetPasswordDate;
		}

		public void setResetPasswordDate(Date resetPasswordDate) {
			this.resetPasswordDate = resetPasswordDate;
		}
		
		
		
		



}
