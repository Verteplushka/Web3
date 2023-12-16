package bean;

import jakarta.faces.application.FacesMessage;
import jakarta.faces.component.UIComponent;
import jakarta.faces.context.FacesContext;
import jakarta.faces.validator.FacesValidator;
import jakarta.faces.validator.Validator;
import jakarta.faces.validator.ValidatorException;

@FacesValidator("YValidator")
public class YValidator implements Validator {

    @Override
    public void validate(FacesContext context, UIComponent component, Object value) throws ValidatorException {

        Double yValue = (Double) value;

        if (yValue == null) {
            FacesMessage message = new FacesMessage("Y must be chosen");
            throw new ValidatorException(message);
        }

        if (yValue.isNaN()) {
            FacesMessage message = new FacesMessage("Y must be a number");
            throw new ValidatorException(message);
        }

        if (yValue <= -5 || yValue >= 5) {
            FacesMessage message = new FacesMessage("Y must be in (-5; 5)");
            throw new ValidatorException(message);
        }
    }
}
