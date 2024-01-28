import React from 'react';
import { useSelector } from 'react-redux';
import { useGetAppliedJobsQuery } from '../../features/job/jobApi';
import Loading from '../../components/reusable/Loading';
import JobCard from '../../components/reusable/JobCard';

const AppliedJobs = () => {
    const { user:{email} } = useSelector((state) => state.auth);

    const {data,isLoading } = useGetAppliedJobsQuery(email);
    console.log("Applied Data", data);
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='px-6'>
            <h2 className='text-2xl mb-3 mt-4'>Applied Jobs</h2>
           <div className='grid grid-cols-2'>
           {
            data.data.map((job) => <JobCard jobData={job} />)
           }
           </div> 
        </div>
    );
};

export default AppliedJobs;