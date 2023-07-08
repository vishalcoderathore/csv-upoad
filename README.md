# CSV Upload Utility

This project includes a utility class for handling CSV uploads. This utility can be especially useful for processing different types of CSV files.

## Master Branch

The master branch includes the basic implementation of the CSV upload utility class in the `CSVReader.ts` file. The class includes basic functionality for reading CSV files and parsing their contents. However, the implementation is not generic enough to be easily reusable or extensible for different types of CSV data.

## Refactor-1-Abstract-Classes Branch

The `refactor-1-abstract-classes` branch introduces a refactor of the `CSVReader.ts` file to make it more reusable and extensible by using abstract classes.

In this approach, we have an abstract `CSVReader` class that defines methods for reading and parsing CSV files. It includes an abstract `mapRow` method that is left for child classes to implement. This method is responsible for mapping each row in the CSV to a typed object.

For example, in the `src` directory there is a CSV file called `football.csv` that includes a list of different matches and their outcomes. The `MatchReader` class in `MatchReader.ts` file extends `CSVReader` class and is specifically tailored to parse this type of CSV data.

If there is any other CSV file that contains a different type of data, a new class can be created extending the `CSVReader` class. This new class would implement the `mapRow` method to map a CSV row to a custom object type that matches the structure of the new CSV data.

By using abstract classes, we can create different reader classes for different types of CSV files without having to rewrite the CSV reading and parsing logic. It promotes code reuse and cleaner, more maintainable code.
