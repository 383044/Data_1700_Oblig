package com.example.data_1700_oblig1;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class IndexController {

    private final List<Billett>billetter=new ArrayList<>();
    @PostMapping("/leggTil")
    public void leggTil(Billett enBillett){
        billetter.add(enBillett);
    }

    @GetMapping("/hent")
    public List<Billett> hentData (){
        return billetter;
    }

    @GetMapping("/slett")
    public void slett(){
        billetter.clear();
    }
}
