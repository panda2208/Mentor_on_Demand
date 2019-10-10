package com.example.demo;

public class PaymentDtls extends AuditModel {
	private static final long serialVersionUID = 1L;
	private Long id;
	private String txnType;
	private Float amount;
	private String remarks;
	private Integer mentorId;
	private Integer userId;
	private String mentorName;
	private Long trainingId;
	private String skillName;
	private Float totalAmountToMentor;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTxnType() {
		return txnType;
	}
	public void setTxnType(String txnType) {
		this.txnType = txnType;
	}
	public Float getAmount() {
		return amount;
	}
	public void setAmount(Float amount) {
		this.amount = amount;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public Integer getMentorId() {
		return mentorId;
	}
	public void setMentorId(Integer mentorId) {
		this.mentorId = mentorId;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public Float getTotalAmountToMentor() {
		return totalAmountToMentor;
	}
	public void setTotalAmountToMentor(Float totalAmountToMentor) {
		this.totalAmountToMentor = totalAmountToMentor;
	}
	public String getMentorName() {
		return mentorName;
	}
	public void setMentorName(String mentorName) {
		this.mentorName = mentorName;
	}
	public Long getTrainingId() {
		return trainingId;
	}
	public void setTrainingId(Long trainingId) {
		this.trainingId = trainingId;
	}
	public String getSkillName() {
		return skillName;
	}
	public void setSkillName(String skillName) {
		this.skillName = skillName;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	

}
