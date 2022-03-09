package az.coin.backendapp.portfolioTracker.resources;

import az.coin.backendapp.portfolioTracker.dto.AssetDTO;
import az.coin.backendapp.portfolioTracker.entity.Asset;
import az.coin.backendapp.portfolioTracker.repository.AssetRepository;
import az.coin.backendapp.portfolioTracker.services.AssetService;
import az.coin.backendapp.todo.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
//@RequestMapping("/assets")
public class AssetResources {

    @Autowired
    private AssetService assetService;

    @Autowired
    private AssetRepository assetRepository;

    @PostMapping("/jpa/users/{username}/portfolio")
    public ResponseEntity<Void> createPortfolioAsset(@PathVariable String username, @RequestBody Asset asset){
       asset.setUsername(username);
       Asset createdAsset = assetRepository.save(asset);

       //Location
       // Get current resource url
       URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
               .path("/{id}").buildAndExpand(createdAsset.getId()).toUri();

       return ResponseEntity.created(uri).build();
    }

    @GetMapping("/jpa/users/{username}/portfolio")
    public List<Asset> getAllAssets(@PathVariable String username) {
        return assetRepository.findByUsername(username);
    }

    @GetMapping("/jpa/users/{username}/ping")
    private String ping() {
        return "ping success!";
    }

//    @GetMapping("/all")
//    private List<AssetDTO> getAllAssets() throws IOException, InterruptedException {
//        return assetService.findAllAssets();
//    }
}
