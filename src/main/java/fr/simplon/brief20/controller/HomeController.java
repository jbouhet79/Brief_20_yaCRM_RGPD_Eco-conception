package fr.simplon.brief20.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@Controller
public class HomeController {
    @GetMapping
    public String dashboard(Model model,
            @RequestHeader(name = "HX-Request", defaultValue = "false", required = false) boolean isHTMX) {
        if (isHTMX) { //  affichage de la page complète ou du fragement si l'en-tête HX-Request est présent et vaut true.
            return "fragments/dashboard";
        } else {
            return "pages/dashboard";
        }
    }
}
