import JobCard from '@/app/components/JobCard';

export default function Jobs() {
  return (
    <div className='bg-slate-200 py-4 rounded-xl'>
      <div className='container'>
        <h2 className='font-bold mb-4'>Recent Jobs</h2>
        <div className='flex flex-col gap-4'>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </div>
  );
}
