public class car {
    String Brand;
    String Model;
    int Year;
    public car(String Brand,String Model,int Year){
        this.Brand=Brand;
        this.Model=Model;
        this.Year=Year;
    }
    public void print() {
        System.out.print("Car Brand: " + Brand);
        System.out.print(", Car Model: " + Model);
        System.out.print(", Car Year: " + Year);
    }
    public static void main(String[] args) {
        car car1 = new car("Maruthi Susuki","WagonR",2016);
        car car2 = new car("Maruthi Susuki","Swift",2018);
        car car3 = new car("Hundai","i10 Grand Asta",2020);
        car1.print();
        System.out.println();
        car2.print();
        System.out.println();
        car3.print();
        System.out.println();
    }
}