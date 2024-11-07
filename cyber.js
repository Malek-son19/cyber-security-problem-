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

  console.log("\nGaps between available talent and open jobs:");

  talentData.forEach((talent) => {
      const gap = Math.abs(talent.avTalent - talent.openJobs);
      console.log(`${talent.expLevel} has a gap of ${gap}`);

      // WHAT HAS THE HIGHEST GAP
      if (gap > maxGap) {
          maxGap = gap;
          levelWithMaxGap = talent.expLevel;
      }
  });

  console.log(`\nThe level with the highest gap is ${levelWithMaxGap} with a gap of ${maxGap}`);
}

printJobData();
countAllOpenJobs();
calculateGaps();
