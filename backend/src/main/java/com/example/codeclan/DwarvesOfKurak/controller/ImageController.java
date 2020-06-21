package com.example.codeclan.DwarvesOfKurak.controller;

import java.io.IOException;
import javax.servlet.http.HttpServletResponse;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/api/assets")
public class ImageController {
    @GetMapping(value = "/jpg", produces = MediaType.IMAGE_JPEG_VALUE)

    public void getImage(HttpServletResponse response, @RequestParam(name="image") String imageName) throws IOException {

        ClassPathResource imgFile = new ClassPathResource("images/" + imageName +".jpg");

        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(imgFile.getInputStream(), response.getOutputStream());
    }

    @GetMapping(value = "/png", produces = MediaType.IMAGE_PNG_VALUE)

    public void getImage2(HttpServletResponse response, @RequestParam(name="image") String imageName) throws IOException {

        ClassPathResource imgFile = new ClassPathResource("images/" + imageName +".png");

        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(imgFile.getInputStream(), response.getOutputStream());
    }

    @GetMapping(value = "/gif", produces = MediaType.IMAGE_GIF_VALUE)

    public void getImage3(HttpServletResponse response, @RequestParam(name="image") String imageName) throws IOException {

        ClassPathResource imgFile = new ClassPathResource("images/" + imageName +".gif");

        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(imgFile.getInputStream(), response.getOutputStream());
    }
}
