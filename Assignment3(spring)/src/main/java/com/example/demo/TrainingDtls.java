package com.example.demo;

import com.fasterxml.jackson.annotation.JsonFormat;

public class TrainingDtls extends AuditModel {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String status;
	private Integer progress;
	private Float commisionAmount;
	private Integer rating;
	private Float avgRating = 0.0f;
	@JsonFormat (pattern ="yyy-MM-dd")
	private String startDate;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
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
	public Float getCommisionAmount() {
		return commisionAmount;
	}
	public void setCommisionAmount(Float commisionAmount) {
		this.commisionAmount = commisionAmount;
	}
	public Integer getRating() {
		return rating;
	}
	public void setRating(Integer rating) {
		this.rating = rating;
	}
	public Float getAvgRating() {
		return avgRating;
	}
	public void setAvgRating(Float avgRating) {
		this.avgRating = avgRating;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	public Float getAmountReceived() {
		return amountReceived;
	}
	public void setAmountReceived(Float amountReceived) {
		this.amountReceived = amountReceived;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public Long getMentorId() {
		return mentorId;
	}
	public void setMentorId(Long mentorId) {
		this.mentorId = mentorId;
	}
	public String getMentorName() {
		return mentorName;
	}
	public void setMentorName(String mentorName) {
		this.mentorName = mentorName;
	}
	public Long getSkillId() {
		return skillId;
	}
	public void setSkillId(Long skillId) {
		this.skillId = skillId;
	}
	public String getSkillName() {
		return skillName;
	}
	public void setSkillName(String skillName) {
		this.skillName = skillName;
	}
	public Float getFees() {
		return fees;
	}
	public void setFees(Float fees) {
		this.fees = fees;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	@JsonFormat(pattern = "yyyy-MM-dd")
	private String endDate;
	@JsonFormat(pattern="HH:mm:ss")
	private String endTime;
	private Float amountReceived;
	private Long userId;
	private String userName;
	private Long mentorId;
	private String mentorName;
	private Long skillId;
	private String skillName;
	private Float fees;
	
	
	

}
