import java.util.Scanner;

public class eveorodd {
    public static void main(String[] args) {
        int a;
        System.out.println("Enter A: ");
        try (Scanner scanner = new Scanner(System.in)) {
            a = scanner.nextInt();
            if (a % 2 == 0) {
                System.out.println("Even");
            } else {
                System.out.println("Odd");
            }
        }
    }
}