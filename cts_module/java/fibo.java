
import java.util.Scanner;
public class fibo {
    public static int Rec (int n) {
        if (n <= 0)
            return 0;
        else if (n == 1)
            return 1;
        else 
            return Rec(n-1) + Rec(n-2);
    }
    public static void main(String[] args) {
        try (Scanner scan = new Scanner(System.in)) {
            int n = scan.nextInt();
            System.out.println(Rec(n-1));
        }
    }
}