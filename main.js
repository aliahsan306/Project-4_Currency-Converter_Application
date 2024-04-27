#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
// list of currencies and their exchange rates
const currency = {
    USD: 1, // Base Currency
    EUR: 0.92,
    GBP: 0.79,
    CAD: 1.36,
    JPY: 151.61,
    AUD: 1.52,
    NZD: 1.66,
    CNY: 7.23,
    IDR: 15887.75,
    INR: 83.30,
    PKR: 277.54,
    BRL: 5.05,
    BTC: 0.000015,
    CHF: 0.90,
    HKD: 7.83,
    KRW: 1351.26,
    MXN: 16.45,
    RUB: 92.58,
    SGD: 1.35,
    ZAR: 18.73,
    AED: 3.67,
    AZN: 1.70,
    BHD: 0.38,
    EGP: 47.33,
    KWD: 0.31,
    LKR: 298.61,
    MAD: 10.07,
    MYR: 4.74,
    OMR: 0.38,
    PHP: 56.59,
    SAR: 3.75,
    THB: 36.52,
    TRY: 32.03,
    TZS: 2576.43,
    EC: 2.70
};
// Print a welcome message
console.log(chalk.bold.rgb(204, 204, 204)(`\n\t\t   <<<=============================================================================>>> `));
console.log(chalk.bold.rgb(204, 204, 204)(`  <<<======================>>> ${chalk.bold.hex('#9999FF')('Welcome To \'Code With Ali\' - Currency Converter Application ')}<<<======================>>> `));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t   <<<=============================================================================>>> \n`));
// Function to select currencies & add amount
let main = async () => {
    while (condition) {
        let userAnswer = await inquirer.prompt([
            {
                name: "from",
                message: chalk.hex('#9999FF')("Select the currency to convert from:"),
                type: "list",
                choices: ['USD', 'EUR', 'GBP', 'INR', 'CAD', 'JPY', 'AUD', 'NZD', 'CNY', 'IDR', 'PKR', 'BRL', 'BTC', 'CHF', 'HKD', 'KRW', 'MXN', 'RUB', 'SGD', 'ZAR', 'AED', 'AZN', 'BHD', 'EGP', 'KWD', 'LKR', 'MAD', 'MYR', 'OMR', 'PHP', 'SAR', 'THB', 'TRY', 'TZS', 'EC']
            },
            {
                name: "to",
                message: chalk.hex('#9999FF')("Select the currency to convert into:"),
                type: "list",
                choices: ['USD', 'EUR', 'GBP', 'INR', 'CAD', 'JPY', 'AUD', 'NZD', 'CNY', 'IDR', 'PKR', 'BRL', 'BTC', 'CHF', 'HKD', 'KRW', 'MXN', 'RUB', 'SGD', 'ZAR', 'AED', 'AZN', 'BHD', 'EGP', 'KWD', 'LKR', 'MAD', 'MYR', 'OMR', 'PHP', 'SAR', 'THB', 'TRY', 'TZS', 'EC']
            },
            {
                name: "amount",
                message: chalk.hex('#9999FF')("Enter Your Amount :"),
                type: "number",
            }
        ]);
        // Calculations & Conversions
        let fromAmount = currency[userAnswer.from];
        let toAmount = currency[userAnswer.to];
        let givenAmount = userAnswer.amount;
        let baseAmount = givenAmount / fromAmount;
        let convertedAmount = baseAmount * toAmount;
        let roundOff = convertedAmount.toFixed(2);
        // Condition to print currency name with its converted value
        if (toAmount == currency.PKR) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Pakistani Rupee \n')}`));
        }
        else if (toAmount == currency.EUR) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Euro \n')}`));
        }
        else if (toAmount == currency.GBP) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Pound sterling \n')}`));
        }
        else if (toAmount == currency.INR) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Indian Rupee \n')}`));
        }
        else if (toAmount == currency.CAD) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Canadian Dollar \n')}`));
        }
        else if (toAmount == currency.JPY) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Japanese Yan \n')}`));
        }
        else if (toAmount == currency.AUD) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Australian Dollar \n')}`));
        }
        else if (toAmount == currency.NZD) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('New Zealand Dollar \n')}`));
        }
        else if (toAmount == currency.CNY) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Chinese Yuan \n')}`));
        }
        else if (toAmount == currency.IDR) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Indonesian Rupiah \n')}`));
        }
        else if (toAmount == currency.BTC) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Bitcoin \n')}`));
        }
        else if (toAmount == currency.CHF) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Swiss Franc \n')}`));
        }
        else if (toAmount == currency.HKD) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Hong Kong Dollar \n')}`));
        }
        else if (toAmount == currency.KRW) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('South Korean won \n')}`));
        }
        else if (toAmount == currency.MXN) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Mexican Peso \n')}`));
        }
        else if (toAmount == currency.RUB) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Russian Ruble \n')}`));
        }
        else if (toAmount == currency.SGD) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Singapore Dollar \n')}`));
        }
        else if (toAmount == currency.ZAR) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('South African Rand \n')}`));
        }
        else if (toAmount == currency.AED) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('United Arab Emirates Dirham \n')}`));
        }
        else if (toAmount == currency.AZN) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Azerbaijani Manat \n')}`));
        }
        else if (toAmount == currency.BHD) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Bahraini Dinar \n')}`));
        }
        else if (toAmount == currency.EGP) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Egyptian Pound \n')}`));
        }
        else if (toAmount == currency.KWD) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Kuwaiti Dinar \n')}`));
        }
        else if (toAmount == currency.LKR) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Sri Lankan Rupee \n')}`));
        }
        else if (toAmount == currency.MAD) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Moroccan Dirham \n')}`));
        }
        else if (toAmount == currency.MYR) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Malaysian Ringgits \n')}`));
            "";
        }
        else if (toAmount == currency.OMR) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Omani Rial \n')}`));
        }
        else if (toAmount == currency.PHP) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Philippine peso \n')}`));
        }
        else if (toAmount == currency.SAR) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Saudi Riyal \n')}`));
        }
        else if (toAmount == currency.THB) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Thai Baht \n')}`));
        }
        else if (toAmount == currency.TRY) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Turkish Lira \n')}`));
        }
        else if (toAmount == currency.TZS) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Tanzanian Shilling \n')}`));
        }
        else if (toAmount == currency.EC) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('East Caribbean Dollar \n')}`));
        }
        else if (toAmount == currency.BRL) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('Brazilian Real \n')}`));
        }
        else if (toAmount == currency.USD) {
            console.log(chalk.bold.hex('#f2b04c')(`Converted Amount = ${chalk.hex('#77DD77')(roundOff)} ${chalk.italic.hex('#77DD77')('United States Dollar \n')}`));
        }
        ;
        // Funtion to rerun or exit the application  
        let mainChoice = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.hex('#EDDE74')("Would you like to try again or exit?"),
                choices: [chalk.hex('#75c1fb')("Try Again"), chalk.hex('#f94449')("Exit")],
            }
        ]);
        if (mainChoice.choice === chalk.hex('#75c1fb')("Try Again")) {
            condition = true;
            console.log("\n");
        }
        else if (mainChoice.choice === chalk.hex('#f94449')("Exit")) {
            let exitchoice = await inquirer.prompt([
                {
                    name: "choice",
                    type: "list",
                    message: chalk.hex('f59b7c')("Are you sure you want to exit?"),
                    choices: ["Yes", "No"],
                }
            ]);
            if (exitchoice.choice === "Yes") {
                condition = false;
            }
            else if (exitchoice.choice === "No") {
                condition = true;
                console.log("\n");
            }
            ;
        }
        ;
    }
};
main();
