package th.ac.ku.kps.eng.cpe.se.dto;

import com.google.zxing.BinaryBitmap;
import com.google.zxing.MultiFormatReader;
import com.google.zxing.ReaderException;
import com.google.zxing.Result;
import com.google.zxing.client.j2se.BufferedImageLuminanceSource;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.common.HybridBinarizer;
import com.google.zxing.qrcode.QRCodeReader;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

public class decoder {
    public static void main(String[] args) {
        String filePath = "../file/335065052_766282687965816_6585229746049882307_n.jpg";

        try {
            BufferedImage image = ImageIO.read(new File(filePath));
            BinaryBitmap bitmap = new BinaryBitmap(new HybridBinarizer(new BufferedImageLuminanceSource(image)));
            QRCodeReader reader = new QRCodeReader();
            Result result = reader.decode(bitmap);
            System.out.println(result.getText());
        } catch (IOException | ReaderException e) {
            e.printStackTrace();
        }
    }
}