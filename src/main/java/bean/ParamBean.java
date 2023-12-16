package bean;

import jakarta.faces.bean.ManagedBean;
import jakarta.faces.bean.SessionScoped;
import server.Dot;

import java.time.LocalDate;
import java.util.ArrayList;

import static java.lang.System.nanoTime;

@ManagedBean
@SessionScoped
public class ParamBean {
    private final ArrayList<Dot> dotsList = new ArrayList<>();
    private int x = 0;
    private double y = 0;
    private int r;

    public ArrayList<Dot> addDot(){
        long startTime = nanoTime();
        int x = getX();
        double y = getY();
        int r = getR();
        String result;
        if((x<=0 && y>=0 && y<=2*x+r) || (x>=0 && y>=0 && x*x+y*y<=r*r) || (x>=0 && y<=0 && x<=r && y>=-r/2.0)){
            result = "hit";
        } else{
            result = "miss";
        }

        this.dotsList.add(new Dot(x, y, r, LocalDate.now(), nanoTime() - startTime, result));
        return this.dotsList;
    }

    public int getX() {
        return x;
    }

    public void setX(int selectedX) {
        this.x = selectedX;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    private int getR() {
        return this.r;
    }

    public boolean getR1() {
        return getR() == 1;
    }

    public boolean getR2() {
        return getR() == 2;
    }

    public boolean getR3() {
        return getR() == 3;
    }

    public boolean getR4() {
        return getR() == 4;
    }

    public boolean getR5() {
        return getR() == 5;
    }

    public void setR1(boolean r) {
        if (r) {
            this.r = 1;
        } else {
            this.r = 0;
        }
    }

    public void setR2(boolean r) {
        if (r) {
            this.r = 2;
        } else {
            this.r = 0;
        }
    }

    public void setR3(boolean r) {
        if (r) {
            this.r = 3;
        } else {
            this.r = 0;
        }
    }

    public void setR4(boolean r) {
        if (r) {
            this.r = 4;
        } else {
            this.r = 0;
        }
    }

    public void setR5(boolean r) {
        if (r) {
            this.r = 5;
        } else {
            this.r = 0;
        }
    }

    public ArrayList<Dot> getDotsList() {
        return dotsList;
    }
}
