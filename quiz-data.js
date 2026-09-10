// Finance for Others — Quiz question bank.
// Each quiz has 20 questions. correctIndex is 0-based into options[].
// explanation covers why the correct option is right AND why the others are wrong,
// so it works as feedback regardless of what the learner picked.

const QUIZZES = {
  "personal-finance": {
    label: "Personal Finance",
    tag: "PERSONAL FINANCE",
    description: "Budgeting, credit, debt, and the everyday money decisions that add up over a lifetime.",
    questions: [
      {
        q: "What is a budget?",
        options: ["A plan for how you will spend and save your income", "A type of loan", "A government tax form", "A bank's interest rate"],
        correctIndex: 0,
        explanation: "A budget is simply a plan matching income to spending and saving. It's not a loan, a tax form, or an interest rate."
      },
      {
        q: "What does APR stand for?",
        options: ["Annual Percentage Rate", "Average Payment Ratio", "Applied Principal Rate", "Annual Property Return"],
        correctIndex: 0,
        explanation: "APR is the Annual Percentage Rate — the yearly cost of borrowing, including interest and fees. The other options are not real financial terms."
      },
      {
        q: "Which of these typically has the highest interest rate?",
        options: ["Credit card debt", "Mortgage", "Federal student loan", "Auto loan"],
        correctIndex: 0,
        explanation: "Credit cards are unsecured debt and typically carry the highest rates. Mortgages, federal student loans, and auto loans are usually secured or subsidized, so they carry lower rates."
      },
      {
        q: "What is an emergency fund typically meant to cover?",
        options: ["3–6 months of essential living expenses", "A down payment on a house", "Retirement savings", "Stock market investments"],
        correctIndex: 0,
        explanation: "An emergency fund is a cash cushion for unexpected expenses or income loss — a separate goal from a house down payment, retirement, or investing. A common target is 3–6 months of essential expenses, kept somewhere stable and easy to access rather than in investments that could drop in value when you need the money."
      },
      {
        q: "What happens to your credit score if you miss a loan payment?",
        options: ["It generally goes down", "It generally goes up", "It stays exactly the same", "It gets deleted"],
        correctIndex: 0,
        explanation: "Payment history is the biggest factor in most credit scores, so a missed payment typically lowers your score — it doesn't raise it, leave it unchanged, or erase it."
      },
      {
        q: "What is compound interest?",
        options: ["Interest calculated on both the principal and previously earned interest", "Interest that never changes", "A one-time fee charged by banks", "Interest only charged on loans, never earned on savings"],
        correctIndex: 0,
        explanation: "Compound interest builds on itself over time. It isn't fixed, it isn't a one-time fee, and it applies to both savings and loans."
      },
      {
        q: "What is a 401(k)?",
        options: ["An employer-sponsored retirement savings account", "A type of checking account", "A government stimulus check", "A form used to file taxes"],
        correctIndex: 0,
        explanation: "A 401(k) is a workplace retirement account with tax advantages — not a checking account, a stimulus payment, or a tax form."
      },
      {
        q: "What does \"diversification\" mean in personal finance?",
        options: ["Spreading money across different investments to reduce risk", "Putting all your savings into one stock", "Only using cash, never a bank", "Paying off all debt at once"],
        correctIndex: 0,
        explanation: "Diversification reduces risk by not concentrating money in one place — the opposite of putting everything into a single stock."
      },
      {
        q: "What is the main purpose of insurance?",
        options: ["To transfer financial risk from an individual to a company in exchange for a premium", "To guarantee investment returns", "To eliminate the need for savings", "To increase your credit score"],
        correctIndex: 0,
        explanation: "Insurance pools risk so a large, unlikely loss is covered in exchange for smaller regular payments. It doesn't guarantee returns, replace savings, or affect your credit score."
      },
      {
        q: "If you only make the minimum payment on a credit card, what generally happens?",
        options: ["You pay significantly more in interest over time", "You pay off the balance faster", "Your interest rate drops to zero", "The card issuer waives all future fees"],
        correctIndex: 0,
        explanation: "Minimum payments mostly cover interest, so the balance shrinks slowly and total interest paid rises — the opposite of paying it off faster or eliminating interest."
      },
      {
        q: "What is a fixed-rate mortgage?",
        options: ["A home loan where the interest rate stays the same for the life of the loan", "A loan where the rate changes every month", "A type of rental agreement", "A government grant for homebuyers"],
        correctIndex: 0,
        explanation: "\"Fixed-rate\" means the rate doesn't change, unlike an adjustable-rate mortgage. It isn't a rental agreement or a grant."
      },
      {
        q: "What is net worth?",
        options: ["The value of everything you own minus everything you owe", "Your annual salary before taxes", "The total amount in your checking account", "Your credit score"],
        correctIndex: 0,
        explanation: "Net worth is assets minus liabilities — a broader measure than salary, a bank balance, or a credit score."
      },
      {
        q: "What is the main advantage of a Roth IRA over a traditional IRA?",
        options: ["Withdrawals in retirement are generally tax-free", "Contributions are never taxed at all, ever", "There's no limit to how much you can contribute", "It guarantees a fixed return"],
        correctIndex: 0,
        explanation: "Roth IRAs are funded with after-tax money, so qualified withdrawals are generally tax-free. That can be especially useful if you expect your tax rate to be higher in retirement. Contributions are still taxed going in, annual contribution limits and eligibility rules apply, and no investment return is guaranteed."
      },
      {
        q: "What does it mean to \"live below your means\"?",
        options: ["Spending less than you earn", "Spending exactly what you earn", "Borrowing to match your desired lifestyle", "Avoiding all forms of debt permanently"],
        correctIndex: 0,
        explanation: "Living below your means simply means spending less than income, creating room to save — it doesn't require zero debt or spending exactly what you make."
      },
      {
        q: "What is a credit utilization ratio?",
        options: ["The percentage of your available credit that you're currently using", "The number of credit cards you own", "Your total income divided by your rent", "The interest rate on your credit card"],
        correctIndex: 0,
        explanation: "Utilization compares your balance to your credit limit — it isn't a count of cards, an income ratio, or an interest rate."
      },
      {
        q: "Why is having some debt not necessarily bad?",
        options: ["Certain debt, like a mortgage, can help build assets or credit history responsibly", "All debt improves your credit score equally regardless of type", "Debt has no impact on your finances", "Debt automatically increases your net worth"],
        correctIndex: 0,
        explanation: "Some debt can be a reasonable tool for building assets or credit history, but not all debt is equal, and debt doesn't automatically help net worth or come with zero impact."
      },
      {
        q: "What's the difference between a debit card and a credit card?",
        options: ["A debit card draws directly from your bank account; a credit card borrows money you repay later", "They are functionally identical", "A credit card can only be used online", "A debit card charges interest, but a credit card never does"],
        correctIndex: 0,
        explanation: "Debit pulls from existing funds immediately; credit extends a loan you repay later — the reverse of the interest claim in option D, and neither is restricted to online use."
      },
      {
        q: "What is renters insurance typically meant to protect?",
        options: ["A tenant's personal belongings and liability inside a rented home", "The landlord's building structure", "The tenant's credit score", "The tenant's car"],
        correctIndex: 0,
        explanation: "Renters insurance covers personal property and liability for the tenant. The building itself is usually covered by the landlord's separate policy, and it doesn't cover a credit score or a vehicle."
      },
      {
        q: "What does \"paying yourself first\" mean in budgeting?",
        options: ["Setting aside savings before spending on discretionary items", "Paying your own salary before paying employees", "Spending on wants before needs", "Paying off all debts before saving anything"],
        correctIndex: 0,
        explanation: "\"Pay yourself first\" means prioritizing savings right when income arrives, rather than saving whatever happens to be left over after spending."
      },
      {
        q: "What is a common recommended way to start building credit history?",
        options: ["Responsibly using a secured credit card or credit-builder loan", "Avoiding all forms of credit forever", "Taking out the largest loan you can qualify for", "Closing all bank accounts"],
        correctIndex: 0,
        explanation: "Small, manageable credit products like secured cards build a track record safely. Avoiding credit entirely, maxing out a large loan, or closing accounts don't build positive history."
      }
    ]
  },

  "economics": {
    label: "Economics",
    tag: "ECONOMICS",
    description: "How prices, markets, and policy decisions move through the wider economy.",
    questions: [
      {
        q: "What is inflation?",
        options: ["A general increase in prices over time, reducing purchasing power", "A decrease in the money supply", "A rise in the stock market", "A type of tax"],
        correctIndex: 0,
        explanation: "Inflation is a broad rise in prices that erodes what money buys — it isn't about the stock market, taxes, or a shrinking money supply."
      },
      {
        q: "What does GDP measure?",
        options: ["The total value of goods and services produced in a country over a period", "The government's total debt", "The unemployment rate", "The stock market's total value"],
        correctIndex: 0,
        explanation: "GDP measures economic output, distinct from debt levels, unemployment, or market capitalization."
      },
      {
        q: "A recession is commonly defined as:",
        options: ["A significant decline in economic activity, often two consecutive quarters of falling GDP", "Any single day the stock market falls", "A period of very low unemployment", "A rise in interest rates"],
        correctIndex: 0,
        explanation: "A recession is a sustained, broad decline in economic activity, usually visible in measures such as output, employment, income, and consumer spending. Two consecutive quarters of falling GDP is a useful shorthand, but it is not the only factor economists use. A single bad market day, low unemployment, or a rate hike alone does not make a recession."
      },
      {
        q: "What is the law of supply and demand?",
        options: ["Prices tend to rise when demand exceeds supply, and fall when supply exceeds demand", "Supply and demand always stay equal", "Government sets all prices directly", "Demand has no effect on price"],
        correctIndex: 0,
        explanation: "This describes the basic market relationship between price and the balance of supply and demand — not equality, irrelevance, or direct government price-setting."
      },
      {
        q: "What does \"opportunity cost\" mean?",
        options: ["The value of the next best alternative you give up when making a choice", "The total cost of an item including tax", "The interest rate on a loan", "A cost that only applies to businesses, not individuals"],
        correctIndex: 0,
        explanation: "Opportunity cost applies to any choice — individual or business — and refers to the best forgone alternative, not taxes or interest specifically."
      },
      {
        q: "What is a central bank's typical role?",
        options: ["Managing a country's money supply and interest rates", "Collecting income taxes", "Regulating a stock exchange's daily trading hours", "Printing physical currency exclusively for private banks' profit"],
        correctIndex: 0,
        explanation: "Central banks primarily manage monetary policy. Tax collection, exchange hours, and currency printing \"for banks' profit\" don't describe their actual role."
      },
      {
        q: "The unemployment rate measures:",
        options: ["The percentage of the labor force that is jobless and actively seeking work", "The percentage of the total population that is retired", "The number of open jobs in the economy", "The average wage across the country"],
        correctIndex: 0,
        explanation: "Unemployment rate specifically tracks job-seekers without jobs, not retirees, open positions, or wage levels."
      },
      {
        q: "What is fiscal policy?",
        options: ["Government decisions about spending and taxation", "A central bank's control of interest rates", "A company's internal budget", "Currency exchange rates between countries"],
        correctIndex: 0,
        explanation: "Fiscal policy is government-level spending and tax decisions, distinct from central bank monetary policy, a company's budget, or exchange rates."
      },
      {
        q: "What is monetary policy?",
        options: ["A central bank's actions to influence the money supply and interest rates", "Government tax legislation", "A company's pricing strategy", "International trade tariffs"],
        correctIndex: 0,
        explanation: "Monetary policy is set by central banks, not by tax legislation, corporate pricing, or trade tariffs."
      },
      {
        q: "What does \"GDP per capita\" tell you?",
        options: ["Average economic output per person in a country", "Total government debt divided by population", "The unemployment rate divided by inflation", "The stock market's average return"],
        correctIndex: 0,
        explanation: "GDP per capita divides total output by population to approximate average output per person — not a debt ratio, an unemployment/inflation calculation, or a market return."
      },
      {
        q: "What is a tariff?",
        options: ["A tax imposed on imported goods", "A subsidy given to exporters", "A tax on domestic sales only", "An interest rate on foreign loans"],
        correctIndex: 0,
        explanation: "Tariffs specifically target imports, unlike export subsidies, domestic sales taxes, or loan interest rates."
      },
      {
        q: "What does \"deflation\" mean?",
        options: ["A general decrease in prices over time", "A general increase in prices over time", "A rise in wages across the economy", "A decrease in unemployment"],
        correctIndex: 0,
        explanation: "Deflation is the opposite of inflation — falling prices, not rising prices, wages, or falling unemployment."
      },
      {
        q: "What is a trade deficit?",
        options: ["When a country imports more than it exports", "When a country exports more than it imports", "When government spending exceeds tax revenue", "When a currency's value increases"],
        correctIndex: 0,
        explanation: "A trade deficit specifically means imports exceed exports. A trade surplus is the reverse, and a budget deficit is a separate concept about government spending versus revenue."
      },
      {
        q: "What is the purpose of raising interest rates during high inflation?",
        options: ["To slow borrowing and spending, cooling demand and price growth", "To make borrowing cheaper and encourage more spending", "To directly set the prices of goods", "To immediately eliminate unemployment"],
        correctIndex: 0,
        explanation: "Higher rates make loans and credit more expensive, which tends to reduce borrowing and spending and cool demand-driven price growth over time. The effect is indirect and can take months to show up. Central banks do not directly set the price of most goods, and rate hikes can also slow hiring, so they do not immediately eliminate unemployment."
      },
      {
        q: "What is a business cycle?",
        options: ["The recurring pattern of economic expansion and contraction over time", "A company's annual budgeting process", "The daily trading hours of a stock exchange", "A fixed 12-month accounting period"],
        correctIndex: 0,
        explanation: "The business cycle refers to macroeconomic ups and downs over time, not a single company's budget, exchange hours, or a fixed accounting period."
      },
      {
        q: "What does \"purchasing power\" refer to?",
        options: ["The amount of goods or services a unit of currency can buy", "The total amount of money a person has in savings", "A store's ability to negotiate prices with suppliers", "The interest rate on a savings account"],
        correctIndex: 0,
        explanation: "Purchasing power is about what money can actually buy, which changes with inflation — not a savings total, a negotiating position, or an interest rate."
      },
      {
        q: "A market economy is generally characterized by:",
        options: ["Prices and production driven mainly by supply and demand rather than central planning", "All prices set by the government", "No private ownership of businesses", "Complete absence of any regulation"],
        correctIndex: 0,
        explanation: "Market economies rely on decentralized supply/demand decisions, unlike government-set prices or no private ownership — though most still have some regulation."
      },
      {
        q: "What does \"scarcity\" mean in economics?",
        options: ["The basic economic problem that resources are limited relative to unlimited wants", "A temporary shortage caused only by natural disasters", "A situation that only applies to poor countries", "A term describing excess unsold inventory"],
        correctIndex: 0,
        explanation: "Scarcity is a foundational concept — limited resources versus unlimited wants — that applies everywhere, not just disasters, poor countries, or unsold surplus."
      },
      {
        q: "What is the difference between microeconomics and macroeconomics?",
        options: ["Microeconomics studies individual markets/agents; macroeconomics studies the economy as a whole", "Microeconomics only studies small businesses", "Macroeconomics only studies government agencies", "There is no meaningful difference"],
        correctIndex: 0,
        explanation: "The micro/macro distinction is about scale of analysis — individual decision-makers versus the aggregate economy — not business size or a government-only focus."
      },
      {
        q: "What typically happens to unemployment during a recession?",
        options: ["It typically rises", "It typically falls", "It stays completely unaffected", "It becomes impossible to measure"],
        correctIndex: 0,
        explanation: "Recessions are generally associated with rising unemployment as economic activity contracts, not falling or unaffected unemployment."
      }
    ]
  },

  "investing": {
    label: "Investing",
    tag: "INVESTING",
    description: "Stocks, bonds, funds, and the core ideas behind growing money over time.",
    questions: [
      {
        q: "What is a stock?",
        options: ["A share representing partial ownership in a company", "A loan made to a company", "A type of savings account", "A government-issued bond"],
        correctIndex: 0,
        explanation: "A stock represents equity ownership, unlike a bond or loan (debt) or a savings account."
      },
      {
        q: "What is a bond?",
        options: ["A debt investment where an investor loans money to an issuer for periodic interest payments", "A share of ownership in a company", "A type of checking account", "A government tax refund"],
        correctIndex: 0,
        explanation: "Bonds are debt instruments — the lender is repaid with interest — unlike stocks, which represent ownership."
      },
      {
        q: "What is diversification meant to reduce?",
        options: ["Risk, by spreading investments across different assets", "Taxes owed on investment gains", "Trading fees", "The time it takes to sell an investment"],
        correctIndex: 0,
        explanation: "Diversification is a risk-management strategy, not primarily a tax, fee, or liquidity-timing strategy."
      },
      {
        q: "What is a mutual fund?",
        options: ["A pooled investment that holds a collection of stocks, bonds, or other assets", "A single company's stock", "A type of personal loan", "A government savings bond"],
        correctIndex: 0,
        explanation: "Mutual funds pool money from many investors into a diversified portfolio, unlike a single stock, personal loan, or specific government bond."
      },
      {
        q: "What does \"risk tolerance\" refer to?",
        options: ["An investor's ability and willingness to endure investment losses", "The interest rate on a bond", "A company's credit rating", "The tax rate on capital gains"],
        correctIndex: 0,
        explanation: "Risk tolerance is a personal financial and psychological measure, distinct from a bond's rate, a company's credit rating, or tax rates."
      },
      {
        q: "What is a capital gain?",
        options: ["The profit made from selling an investment for more than its purchase price", "The interest earned on a savings account", "A dividend paid by a company", "A tax deduction for business expenses"],
        correctIndex: 0,
        explanation: "Capital gain specifically refers to appreciation realized on sale — dividends, interest, and deductions are separate concepts."
      },
      {
        q: "What is an index fund?",
        options: ["A fund designed to track the performance of a specific market index", "A fund that only invests in government bonds", "A fund managed by aggressively picking individual \"hot\" stocks", "A type of insurance product"],
        correctIndex: 0,
        explanation: "Index funds passively mirror an index like the S&P 500, unlike actively managed stock-picking funds, bond-only funds, or insurance products."
      },
      {
        q: "What does \"buy low, sell high\" describe?",
        options: ["A basic investing goal of purchasing assets at a lower price and selling at a higher one", "A guaranteed investment strategy with no risk", "A type of tax strategy", "A rule that stock prices only move in one direction"],
        correctIndex: 0,
        explanation: "It's a simple description of profit-seeking behavior, not a guarantee, a tax rule, or a claim about one-directional prices."
      },
      {
        q: "What is a dividend?",
        options: ["A portion of a company's profit distributed to shareholders", "The price you pay to buy a stock", "A fee charged by a brokerage", "A type of government bond"],
        correctIndex: 0,
        explanation: "Dividends are profit-sharing payments to shareholders — not a purchase price, brokerage fee, or bond type."
      },
      {
        q: "What is dollar-cost averaging?",
        options: ["Investing a fixed amount at regular intervals regardless of price", "Buying only when prices are at their lowest point", "Selling all investments at once", "A tax filing method for investment income"],
        correctIndex: 0,
        explanation: "Dollar-cost averaging means investing the same dollar amount on a regular schedule, so you buy more shares when prices are lower and fewer when they are higher. It can make investing easier to stick with and reduces the pressure to guess the best entry point, but it does not guarantee a profit or always outperform investing a lump sum immediately."
      },
      {
        q: "What does \"liquidity\" mean for an investment?",
        options: ["How easily it can be converted into cash without a major loss of value", "How much interest it pays annually", "How risky the investment is", "How long the investment has existed"],
        correctIndex: 0,
        explanation: "Liquidity is about ease of conversion to cash, distinct from interest paid, risk level, or the investment's age."
      },
      {
        q: "What is the general relationship between risk and potential return?",
        options: ["Higher potential returns are generally associated with higher risk", "Higher risk always guarantees higher returns", "Risk and return are unrelated", "Lower risk always produces higher returns"],
        correctIndex: 0,
        explanation: "Risk and potential return tend to move together: investors usually require the possibility of a higher return to accept more uncertainty. But that is a trade-off, not a promise — a riskier investment can lose money or underperform a safer one. Time horizon, diversification, and your ability to withstand losses all matter when deciding how much risk to take."
      },
      {
        q: "What is a 401(k) match from an employer?",
        options: ["When an employer contributes additional money based on an employee's own contributions", "A type of loan from the employer", "A one-time signing bonus", "A tax penalty for early withdrawal"],
        correctIndex: 0,
        explanation: "An employer match adds extra retirement funds tied to your own contribution — it's not a loan, bonus, or penalty."
      },
      {
        q: "What does it mean to be a \"long-term investor\"?",
        options: ["Holding investments for years, aiming to ride out short-term market swings", "Buying and selling stocks within the same day", "Only investing in cash accounts", "Avoiding the stock market entirely"],
        correctIndex: 0,
        explanation: "Long-term investing means holding through volatility over years — the opposite of day trading, and distinct from avoiding markets or holding only cash."
      },
      {
        q: "What is an expense ratio in a fund?",
        options: ["The annual fee charged by a fund, expressed as a percentage of assets", "The percentage of a fund invested in bonds", "The tax rate applied to fund withdrawals", "The minimum amount required to invest"],
        correctIndex: 0,
        explanation: "Expense ratio is specifically the fund's ongoing management fee — not an asset allocation percentage, tax rate, or minimum investment amount."
      },
      {
        q: "What is a stock market index like the S&P 500?",
        options: ["A basket of selected stocks used to represent the performance of a segment of the market", "A single company's stock price", "A government regulatory agency", "A type of savings bond"],
        correctIndex: 0,
        explanation: "An index tracks a group of stocks as a benchmark, unlike a single stock's price, a regulator, or a bond."
      },
      {
        q: "What is compound growth in investing?",
        options: ["Investment returns generating their own additional returns over time", "A fixed annual return that never changes", "A tax owed only once per decade", "A fee charged for holding cash"],
        correctIndex: 0,
        explanation: "Compound growth means earnings build on themselves over time — it isn't a fixed return, an infrequent tax, or a cash-holding fee."
      },
      {
        q: "What does a \"bear market\" typically refer to?",
        options: ["A prolonged period of falling stock prices", "A prolonged period of rising stock prices", "A single day of high trading volume", "A type of government bond"],
        correctIndex: 0,
        explanation: "\"Bear\" specifically signals falling prices; \"bull\" describes rising prices. Neither refers to trading volume or a bond."
      },
      {
        q: "Why do financial advisors often recommend starting to invest early?",
        options: ["To take advantage of more time for compound growth", "Because stock prices only go up when you start early", "Because early investors pay no taxes on gains", "Because it guarantees a specific rate of return"],
        correctIndex: 0,
        explanation: "Time in the market allows compounding to work longer — it doesn't guarantee prices only rise, eliminate taxes, or guarantee a specific return."
      },
      {
        q: "What is a robo-advisor?",
        options: ["An automated platform that builds and manages an investment portfolio based on an investor's goals", "A physical robot that trades on a stock exchange floor", "A government financial regulator", "A type of insurance policy"],
        correctIndex: 0,
        explanation: "Robo-advisors are software-based portfolio management tools, not literal robots, government regulators, or insurance."
      }
    ]
  },

  "energy": {
    label: "Energy",
    tag: "ENERGY",
    description: "Energy markets, scarcity, and the business finance side of how energy gets priced and traded.",
    questions: [
      {
        q: "What does \"energy scarcity\" refer to?",
        options: ["A situation where energy supply is insufficient to meet demand at current prices", "A surplus of energy that can't be sold", "A country with no need for imported energy", "A type of renewable energy technology"],
        correctIndex: 0,
        explanation: "Scarcity describes supply falling short of demand — the opposite of a surplus, and unrelated to import-independence or any specific technology."
      },
      {
        q: "What is a commodity in the context of energy markets?",
        options: ["A basic, interchangeable raw material like oil or natural gas that is bought and sold", "A branded consumer product", "A type of company stock", "A government subsidy program"],
        correctIndex: 0,
        explanation: "Energy commodities are standardized raw materials traded on markets, unlike branded products, company stock, or subsidy programs."
      },
      {
        q: "What is OPEC?",
        options: ["An organization of oil-exporting countries that coordinates petroleum production policy", "A global renewable energy company", "A United Nations climate agency", "A private oil trading firm"],
        correctIndex: 0,
        explanation: "OPEC is a coalition of oil-producing nations, not a single company, a UN body, or a private trading firm."
      },
      {
        q: "What generally happens to oil prices when major producers cut supply?",
        options: ["Prices tend to rise, all else being equal", "Prices always fall", "Prices are unaffected by supply changes", "Prices are set only by government decree"],
        correctIndex: 0,
        explanation: "Reduced supply relative to demand tends to push prices up — basic supply and demand, not something simply dictated by government."
      },
      {
        q: "What is a futures contract in energy trading?",
        options: ["An agreement to buy or sell a commodity at a set price on a future date", "A loan given to an energy company", "A government grant for renewable projects", "A type of insurance policy"],
        correctIndex: 0,
        explanation: "Futures contracts set a price today for buying or selling a commodity at a future date. Producers and users can use them to reduce uncertainty about future prices; traders may also use them to speculate. They are standardized agreements, not loans, grants, or insurance, and their value can move sharply as market expectations change."
      },
      {
        q: "Why do energy prices tend to be volatile?",
        options: ["Supply and demand for energy can shift quickly due to weather, geopolitics, and economic conditions", "Energy prices are fixed by international treaty", "Energy is the only commodity that is never traded", "Demand for energy never changes"],
        correctIndex: 0,
        explanation: "Energy is sensitive to fast-moving real-world factors. Prices aren't fixed by treaty, demand does fluctuate, and energy is heavily traded."
      },
      {
        q: "What is the difference between renewable and non-renewable energy sources?",
        options: ["Renewable sources naturally replenish over a short time (like solar or wind); non-renewable sources do not (like coal or oil)", "Renewable sources are always cheaper than non-renewable ones", "Non-renewable sources never run out", "There is no meaningful difference"],
        correctIndex: 0,
        explanation: "The core distinction is about natural replenishment rate, not a guaranteed cost comparison — non-renewables are by definition finite."
      },
      {
        q: "What does \"energy independence\" mean for a country?",
        options: ["Producing enough energy domestically to reduce reliance on imports", "Using no energy at all", "Exporting 100% of all energy produced", "Banning all forms of energy trade"],
        correctIndex: 0,
        explanation: "Energy independence is about reducing import reliance through domestic production, not eliminating energy use or trade entirely."
      },
      {
        q: "What is a capital expenditure (CapEx) in an energy company?",
        options: ["Money spent on acquiring or upgrading physical assets like infrastructure or equipment", "Money spent on daily office supplies", "A tax refund received by the company", "A dividend paid to shareholders"],
        correctIndex: 0,
        explanation: "CapEx refers to long-term physical investments, distinct from routine operating costs, tax refunds, or dividend payments."
      },
      {
        q: "What is a hedge in the context of energy trading?",
        options: ["A financial position taken to offset potential losses from price changes", "A type of physical fence around an energy facility", "A government energy tax", "A type of renewable energy source"],
        correctIndex: 0,
        explanation: "A hedge is a risk-management strategy that offsets exposure to an unwanted price move. For example, an airline may use fuel contracts to make future fuel costs more predictable. A hedge can reduce uncertainty, but it may also limit gains if prices move in the company's favor; it is not a literal fence, a tax, or an energy source."
      },
      {
        q: "Why might an airline use fuel hedging?",
        options: ["To lock in fuel costs and reduce exposure to volatile oil price swings", "To guarantee the airline never pays for fuel again", "To increase ticket prices automatically", "To avoid regulatory fuel requirements"],
        correctIndex: 0,
        explanation: "Fuel hedging manages cost risk from price swings. It doesn't eliminate fuel costs entirely, automatically raise ticket prices, or bypass regulations."
      },
      {
        q: "What does \"peak demand\" mean in energy markets?",
        options: ["The highest level of energy usage during a specific period, like a hot summer afternoon", "The lowest possible price for energy", "A permanent, unchanging demand level", "A type of energy storage technology"],
        correctIndex: 0,
        explanation: "Peak demand refers to a usage spike at a particular time, not a price level, a constant demand, or a storage technology."
      },
      {
        q: "What is grid infrastructure primarily responsible for?",
        options: ["Transmitting and distributing electricity from producers to consumers", "Setting global oil prices", "Regulating income taxes", "Producing renewable energy technology patents"],
        correctIndex: 0,
        explanation: "The grid moves electricity from generation to end users. It isn't involved in setting oil prices, tax policy, or patents."
      },
      {
        q: "What does \"stranded assets\" mean in energy finance?",
        options: ["Assets, like fossil fuel reserves, that lose value earlier than expected due to market or policy shifts", "Assets that have appreciated significantly in value", "Cash reserves held by an energy company", "A type of renewable energy subsidy"],
        correctIndex: 0,
        explanation: "Stranded assets describe unexpected devaluation, often from a shift away from fossil fuels — not appreciation, cash reserves, or a subsidy program."
      },
      {
        q: "What is the primary purpose of a strategic petroleum reserve?",
        options: ["To provide an emergency supply of oil in case of a major disruption", "To permanently lower oil prices for consumers", "To store renewable energy for daily use", "To fund international climate treaties"],
        correctIndex: 0,
        explanation: "Strategic reserves exist as emergency backup supply, not a permanent price-control tool, a renewable storage system, or a treaty funding mechanism."
      },
      {
        q: "What does \"price elasticity of demand\" mean for energy?",
        options: ["How much the quantity of energy demanded changes in response to a price change", "The exact fixed price of energy set by law", "The physical elasticity of pipeline materials", "A type of energy contract with no price at all"],
        correctIndex: 0,
        explanation: "Elasticity measures demand sensitivity to price — an economic concept, not a legal price mandate, a material property, or a price-free contract."
      },
      {
        q: "Why is natural gas often considered a \"transition fuel\"?",
        options: ["It burns cleaner than coal and can help bridge the shift toward renewable energy sources", "It is completely renewable and never runs out", "It cannot be traded on any market", "It has no environmental impact whatsoever"],
        correctIndex: 0,
        explanation: "Natural gas is viewed as a relatively cleaner fossil fuel bridge, not a renewable, untradeable, or impact-free resource."
      },
      {
        q: "What is a power purchase agreement (PPA)?",
        options: ["A long-term contract between an energy buyer and a producer to purchase electricity at agreed terms", "A government-issued driver's license for electric vehicles", "A short-term loan for household appliances", "A tax credit available only to individuals"],
        correctIndex: 0,
        explanation: "A PPA is a business contract for electricity supply, unrelated to driver's licenses, appliance loans, or individual-only tax credits."
      },
      {
        q: "What role does geopolitics often play in energy markets?",
        options: ["Conflicts or policy decisions in producing regions can significantly affect global energy supply and prices", "Geopolitics has no measurable effect on energy prices", "Energy prices are set only by weather patterns", "Energy markets operate independently of any single country's actions"],
        correctIndex: 0,
        explanation: "Geopolitical events in major producing regions routinely move global energy markets. Weather is one factor among several, and no market is fully insulated from major producers' actions."
      },
      {
        q: "What is the basic economic reason scarce energy resources tend to become more valuable as supply tightens?",
        options: ["As available supply shrinks relative to demand, prices tend to rise, all else equal", "Scarce resources automatically become worthless", "Prices only reflect government-set values, not supply and demand", "Value has no connection to how much of a resource remains"],
        correctIndex: 0,
        explanation: "This is basic supply and demand logic applied to depleting resources — scarcity doesn't make something worthless, and value is connected to available supply."
      }
    ]
  }
};

// Illustrative percentile lookup by raw score (0–20).
// This is NOT based on a formal norming study of US adults — it's a rough,
// illustrative curve modeled loosely on general financial literacy research
// showing most adults score in the middle-to-lower range. Treat it as a fun
// estimate, not a scientific measurement.
const PERCENTILES = [1, 2, 3, 5, 8, 12, 17, 23, 30, 38, 47, 56, 64, 71, 78, 84, 89, 93, 96, 98, 99];
