
import java.util.Scanner;

public class multiply {
    public static void main(String[] args) {
        int n;
        try (Scanner scan = new Scanner(System.in)) {
            System.out.print("enter the multiplication table number : ");
            n = scan.nextInt();
        }
        for(int j=1;j<11;j++){
                System.out.println(n + " X " + j + " = " + n*j);
            }
    }
}