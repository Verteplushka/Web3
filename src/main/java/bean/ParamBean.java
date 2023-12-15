package bean;

import jakarta.faces.bean.ManagedBean;
import jakarta.faces.bean.SessionScoped;

@ManagedBean
@SessionScoped
public class ParamBean {
    private int x = 0;
    private double y = 0;
    private int r;

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
        this.r = 1;
    }
    public void setR2(boolean r) {
        this.r = 2;
    }
    public void setR3(boolean r) {
        this.r = 3;
    }
    public void setR4(boolean r) {
        this.r = 4;
    }
    public void setR5(boolean r) {
        this.r = 5;
    }
}
