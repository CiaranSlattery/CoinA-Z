package az.coin.backendapp.portfolioTracker;

import az.coin.backendapp.portfolioTracker.AssetDTO;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;


@Service
public class AssetService {

    private final String BASE_URL = "https://api.coingecko.com/api/v3";

    public List<AssetDTO> findAllAssets() throws IOException, InterruptedException {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(BASE_URL+"/coins/list"))
                .method("Get", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        final ObjectMapper objectMapper = new ObjectMapper();
        List<AssetDTO> assets = objectMapper.readValue(response.body(), new TypeReference<List<AssetDTO>>(){});
        return assets;

    }

}
