package bean;

import jakarta.faces.bean.ManagedBean;
import jakarta.faces.bean.ViewScoped;
import server.Dot;

import java.util.ArrayList;

@ViewScoped
@ManagedBean
public class DotBean {
    private ArrayList<Dot> dotsList;

    public ArrayList<Dot> getDotsList() {
        return dotsList;
    }
    public void setDotsList(ArrayList<Dot> dotsList) {
        this.dotsList = dotsList;
    }
}
