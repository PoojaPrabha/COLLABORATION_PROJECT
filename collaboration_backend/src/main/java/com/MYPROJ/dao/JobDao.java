package com.MYPROJ.dao;

import java.util.List;

import com.MYPROJ.model.Job;

public interface JobDao {
	void addJob(Job job);
	List<Job> getAllJobs();
	Job getJob(int id);

}