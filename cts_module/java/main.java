class animal {
    void makesound(){
    System.out.println("Animal Sounds");
    }
}
class Dog extends animal{
    @Override
    public void makesound(){
    System.out.println("Boww Boww");
    }
}
public class main{
    public static void main(String[] args) {
    animal animal = new animal();
    animal.makesound();
    Dog dog = new Dog();
    dog.makesound();
    }
}