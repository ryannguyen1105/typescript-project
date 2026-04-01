type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
};

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;
};

type CalculationResult = InvestmentResult[] | string;

function calculateInvesment(data: InvestmentData): CalculationResult {
    const {initialAmount, annualContribution, expectedReturn, duration} = data;

    if (initialAmount < 0) {
        return 'Initial investment amount must be at least zero.'
    }

    if (duration <= 0) {
        return 'No valid amount of years provided.'
    }

    if (expectedReturn <= 0) {
        return 'Expected return must be at least zero.'
    }

    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;

    const annualResults: InvestmentResult[] = [];

    for(let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions
        });
    }
    return annualResults;
}

function printResult (result: CalculationResult) {
    if (typeof results == 'string') {
        console.log(results);
        return;
    }
    for (const yearEndReuslt of results) {
        console.log(yearEndReuslt.year);
        console.log(`Total: ${yearEndReuslt.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndReuslt.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndReuslt.totalInterestEarned.toFixed(0)}`);
        console.log(`=====================`);
        

    }
}

const investmentData: InvestmentData = {
    initialAmount: 5000,
    annualContribution: 5000,
    expectedReturn: 0.08,
    duration: 10
};

const results = calculateInvesment(investmentData)

printResult(results);