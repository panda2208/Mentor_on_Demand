package com.example.demo;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Training {
	
	private static final long serialVersionUID= 1L;
	
	@Id
	@Column(name="_id")
	private Integer id;
	
	@Column(name="status")
	private String status;
	
	@Column(name="progress")
	private Integer progress = 0;
	
	@Column(name="fees")
	private Integer fees =0;
	
	@Column(name= "commission_amount")
	private Integer commissionAmount =0;
	
	@Column(name="rating")
	private Integer rating =0;
	
	
	 @JsonFormat(pattern="yyyy-MM-dd")
	 @Column(name ="start_date")
	 private Date startDate;
	
	 @JsonFormat(pattern= "yyyy-MM-dd")
	 @Column(name="end_date")
	 private Date endDate;
	 
	 @JsonFormat(pattern= "HH:mm:ss")
	 @Column(name="start_time")
	 private String startTime;
	 
	 @JsonFormat(pattern= "HH:mm:ss")
	 @Column(name="end_time")
	 private String endTime;
	 
	 @Column(name="amount_received")
	 private Integer amountRecived=0;

	 
	 @Column(name="user_id")
	private Integer userId;
	 
	 
	 @Column(name="mentor_id")
		private Integer mentorId;
	 
	 @Column(name="skill_id")
		private Long skillId;
	 
	 @Column(name="razorpay_payment_id")
		private String razorpayPaymentId;
	 
	 
	 @ManyToOne(cascade = CascadeType.ALL)
		@JoinColumn(name="mentor_id", insertable=false, updatable = false)
		private Mentor mentor;
		
		
		@OneToMany(fetch=FetchType.LAZY,cascade = CascadeType.ALL)
		@JoinTable(name = "training_user", joinColumns = { 
				@JoinColumn(name = "training_id", nullable = false, updatable = false) }, 
				inverseJoinColumns = { @JoinColumn(name = "user_id", 
						nullable = false, updatable = false) })
		

		private List <User> users;
		
		@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
		@JoinTable(name = "training_skill", joinColumns = { 
				@JoinColumn(name = "training_id", nullable = false, updatable = false) }, 
				inverseJoinColumns = { @JoinColumn(name = "skill_id", 
						nullable = false, updatable = false) })
		private List<Skill> skill;
		
		@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
		@JoinTable(name = "training_payment", joinColumns = { 
				@JoinColumn(name = "training_id", nullable = false, updatable = false) }, 
				inverseJoinColumns = { @JoinColumn(name = "payment_id", 
						nullable = false, updatable = false) })
		
		private List<Payment>payment;
		
		@ManyToOne(cascade=CascadeType.ALL)
		@JoinColumn(name="technology_ID", insertable = false,updatable = false)
		private Technology technology;


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Integer getProgress() {
		return progress;
	}

	public void setProgress(Integer progress) {
		this.progress = progress;
	}

	public Integer getFees() {
		return fees;
	}

	public void setFees(Integer fees) {
		this.fees = fees;
	}

	public Integer getCommissionAmount() {
		return commissionAmount;
	}

	public void setCommissionAmount(Integer commissionAmount) {
		this.commissionAmount = commissionAmount;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public Integer getAmountRecived() {
		return amountRecived;
	}

	public void setAmountRecived(Integer amountRecived) {
		this.amountRecived = amountRecived;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getMentorId() {
		return mentorId;
	}

	public void setMentorId(Integer mentorId) {
		this.mentorId = mentorId;
	}

	public Long getSkillId() {
		return skillId;
	}

	public void setSkillId(Long skillId) {
		this.skillId = skillId;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public String getRazorpayPaymentId() {
		return razorpayPaymentId;
	}

	public void setRazorpayPaymentId(String razorpayPaymentId) {
		this.razorpayPaymentId = razorpayPaymentId;
	}

	public Mentor getMentor() {
		return mentor;
	}

	public void setMentor(Mentor mentor) {
		this.mentor = mentor;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	public List<Skill> getSkill() {
		return skill;
	}

	public void setSkill(List<Skill> skill) {
		this.skill = skill;
	}

	public List<Payment> getPayment() {
		return payment;
	}

	public void setPayment(List<Payment> payment) {
		this.payment = payment;
	}

	public Technology getTechnology() {
		return technology;
	}

	public void setTechnology(Technology technology) {
		this.technology = technology;
	}


	
	

}
