import java.util.Scanner;
public class GradeCalC {
    public   static void main(String[] args) {
        System.out.print("Enter an expression:");
        try (Scanner scan = new Scanner(System.in)) {
            int mark;
            mark=scan.nextInt();
            scan.nextLine();
            if (mark>=90)
                System.out.println("O");
            else if ((90>mark) && (mark>80))
                System.out.println("A");
            else if ((80>=mark) && (mark>70))
                System.out.println("B");
            else if ((70>=mark) && (mark>60))
                System.out.println("C");
            else if ((60>mark) && (mark>=50))
                System.out.println("D");
            else
                System.out.println("Pail");
        }
    }
}
