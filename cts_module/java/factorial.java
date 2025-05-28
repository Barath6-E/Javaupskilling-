import java.util.Scanner;

public class factorial {
    public static void main(String[] args) {
        int n;
        long factorial=1;
        try (Scanner scan = new Scanner(System.in)){
        n = scan.nextInt();
            for(int i=1;i<=n;i++){
                factorial*=i;
            }
            System.out.println(factorial);
            scan.close();
        }
        
    }
    
}
