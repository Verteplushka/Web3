package server;

import java.time.LocalDate;

public class Dot {
    private int x;
    private double y;
    private int r;
    private LocalDate currentTime;
    private long scriptTime;
    private String result;

    public Dot(int x, double y, int r, LocalDate currentTime, long scriptTime, String result){
        this.x = x;
        this.y = y;
        this.r = r;
        this.currentTime = currentTime;
        this.scriptTime = scriptTime;
        this.result = result;
    }

    public int getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public int getR() {
        return r;
    }

    public LocalDate getCurrentTime() {
        return currentTime;
    }

    public long getScriptTime() {
        return scriptTime;
    }

    public String getResult() {
        return result;
    }

    @Override
    public String toString() {
        return "[x: " + getX() + "; y: " + getY() + "; r: " + getR() + "; currentTime: " + getCurrentTime() + "; scriptTime: " + getScriptTime() + "; result: " + getResult() + "]";
    }
}
