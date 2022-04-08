package az.coin.backendapp.portfolioTracker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins="http://54.247.123.110:3000")
public class AssetResource {

    @Autowired
    private AssetRepository assetRepository;

    @GetMapping("/jpa/users/{username}/ping")
    private String ping() {
        return "ping success!";
    }

    @GetMapping("/jpa/users/{username}/portfolio")
    public List<Asset> getAllAssets(@PathVariable String username) {
        return assetRepository.findByUsername(username);
        //return todoService.findAll();
    }

//    @GetMapping("/jpa/users/{username}/portfolio/{id}")
//    public Asset getAsset(@PathVariable String username, @PathVariable long id) {
//        return assetRepository.findById(id).get();
//        // return todoService.findById(id);
//    }

    @DeleteMapping("/jpa/users/{username}/portfolio/{id}")
    public ResponseEntity<Void> deleteAsset(@PathVariable String username, @PathVariable String id){

        assetRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }

//    @PutMapping("/jpa/users/{username}/portfolio/{id}")
//    public ResponseEntity<Asset> updateAsset(@PathVariable String username, @PathVariable long id, @RequestBody Asset asset){
//
//        asset.setUsername(username);
//
//        Asset assetUpdated = assetRepository.save(asset);
//
//        return new ResponseEntity<Asset>(asset, HttpStatus.OK);
//    }

    @PostMapping("/jpa/users/{username}/portfolio")
    public ResponseEntity<Void> createAsset(@PathVariable String username, @RequestBody Asset asset){

        asset.setUsername(username);

        Asset createdAsset = assetRepository.save(asset);

        //Location
        //Get current resource url
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdAsset.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

}
