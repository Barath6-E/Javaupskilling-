import java.util.Scanner;

public class LeapYear {
    public static void main(String[] args) {
        try (Scanner scan = new Scanner(System.in)) {
            int year;
            System.out.println("Enter the Year: ");
            year = scan.nextInt();
            scan.nextLine();
            if (year % 4 == 0) {
                if (year % 400 == 0)
                    System.out.println("The Given year " + year + " is a Leap Year");
                else
                    System.out.println("The Given year " + year + " is not Leap a year");
            }
            else {
                System.out.println("The Given year " + year + " is not a Leap Year");
            }
        }
    }
}