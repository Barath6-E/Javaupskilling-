import java.util.Scanner;
public class calC {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            int a, b;
            System.out.println("Enter A: ");
            a = scanner.nextInt();
            System.out.println("Enter B: ");
            b = scanner.nextInt();
            scanner.nextLine();
            System.out.println("Choose one operation: \n+,-,*,/");
            String operator = scanner.nextLine();
            switch (operator) {
                case "+" -> System.out.println("Addition: " + (a+b));
                case "-" -> System.out.println("Subtraction: " + (a-b));
                case "*" -> System.out.println("Multiplication: " + (a*b));
                case "/" -> {
                    if (b != 0) {
                        System.out.println("Division: " + (a/b));
                    }
                    else {
                        System.out.println("Division  by Zero!");
                    }
                }
                default -> System.out.println("Invalid Operator!");
            }
        }
    }
}