const talentData = [
    {
      expLevel: 'entry-level',
      openJobs: Math.floor(Math.random() *   21),
      avTalent: 25
    },
    {
      expLevel: 'mid-level',
      openJobs: Math.floor(Math.random() * 21),
      avTalent: 20
    },
    {
      expLevel: 'senior-level',
      openJops: Math.floor(Math.random() * 21),
      avTalent: 10
    }
  ];

  function printJobData() {
    talentData.forEach((talent) => {
        console.log(`${talent.expLevel} has ${talent.openJobs} open jobs.`);
    });
}

printJobData();
