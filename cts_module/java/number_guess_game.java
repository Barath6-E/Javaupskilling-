import java.util.Random;
import java.util.Scanner;
public class number_guess_game {
    @SuppressWarnings("ConvertToTryWithResources")
    public static void main(String[] args) {
        Scanner scan =new Scanner(System.in);
        Random Random=new Random();
        int Secret_number = Random.nextInt(100)+1;
        int guess;
        while (true) { 
            System.out.print("Enter a number from 1 to 100:");
            guess=scan.nextInt();
            guess++;
            if(Secret_number==guess){
                System.out.println("Correct");
                break;
            }
            int difference = Math.abs(Secret_number-guess);
            if((difference<5)){
                System.out.println("u r colse");
            }
            else{
                System.out.println("U r far");
            }
        }
        scan.close();
    }
}
