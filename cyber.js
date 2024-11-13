const talentData = [
  {
      expLevel: 'entry-level',
      openJobs: 10,
      avTalent: 25
  },
  {
      expLevel: 'mid-level',
      openJobs: 15,
      avTalent: 20
  },
  {
      expLevel: 'senior-level',
      openJobs: 25,
      avTalent: 10
  }
];

function printJobData() {
  talentData.forEach((talent) => {
      console.log(`${talent.expLevel} has ${talent.openJobs} open jobs.`);
  });
}

function countAllOpenJobs() {
  const totalOpenJobs = talentData.reduce((sum, talent) => sum + talent.openJobs, 0);
  console.log(`Total open jobs: ${totalOpenJobs}`);
}



function calculateGaps() {
  let maxGap = -Infinity;
  let levelWithMaxGap = '';
  let totalGap = 0; 
  console.log("\nGaps between available talent and open jobs:");

  talentData.forEach((talent) =>  {
      const gap = Math.abs(talent.avTalent - talent.openJobs);
      console.log(`${talent.expLevel} has a gap of ${gap}`);

      //  level with the highest gap
      if (gap > maxGap) {
          maxGap = gap;
          levelWithMaxGap = talent.expLevel;
      }

      //  the total gap
      totalGap += gap;
  });
  console.log(`The total of  gaps is ${totalGap}`);
  console.log(`\nThe level with the highest gap is ${levelWithMaxGap} with a gap of ${maxGap}`);
 
}

printJobData();
countAllOpenJobs();
calculateGaps();
