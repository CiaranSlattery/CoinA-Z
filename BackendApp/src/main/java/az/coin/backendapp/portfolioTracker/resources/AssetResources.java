package az.coin.backendapp.portfolioTracker.resources;

import az.coin.backendapp.portfolioTracker.dto.AssetDTO;
import az.coin.backendapp.portfolioTracker.services.AssetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/assets")
public class AssetResources {

    @Autowired
    private AssetService assetService;

    @GetMapping("/ping")
    private String ping() {
        return "ping success!";
    }

    @GetMapping("/all")
    private List<AssetDTO> getAllAssets() throws IOException, InterruptedException {
        return assetService.findAllAssets();
    }
}
