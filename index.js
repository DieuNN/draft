const https = require('https');
const fs = require('fs');
const http = require('http')
const express = require('express');
const path = require("path");

const options = {
    key: fs.readFileSync('private.key'),
    cert: fs.readFileSync('certificate.crt')
};

const app = express()

app.set("view engine", 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index');
});

// Gioi thieu cong ty
app.get('/gioi-thieu-cong-ty', (req, res) => {
    res.render("gioi_thieu/gioi_thieu_cong_ty")
})
app.get('/lich-su-hinh-thanh', (req, res) => {
    res.render("gioi_thieu/lich_su_hinh_thanh")
})
app.get('/doi-tac', (req, res) => {
    res.render("gioi_thieu/doi_tac")
})
app.get('/doi-ngu-nhan-su', (req, res) => {
    res.render("gioi_thieu/doi_ngu_nhan_su")
})

// Du an
app.get('/du-an', (req, res) => {
    res.render("du_an/du_an")
})

// Hoat dong
app.get('/hoat-dong', (req, res) => {
    res.render("hoat_dong/hoat_dong")
})

// Hỗ trợ
app.get('/ho-tro', (req, res) => {
    res.render("ho_tro/ho_tro")
})

// Lien he
app.get('/lien-he', (req, res) => {
    res.render("lien_he/lien_he")
})

// San pham
app.get('/san-pham', (req, res) => {
    res.render("san_pham/may_nen_khi_hitachi")
})

app.get('/san-pham/may-nen-khi-hitachi-truc-vit-khong-dau-hai-cap-nen-22-120kw/', (req, res) => {
    res.render("san_pham/may_nen_khi_hitachi_truc_vit_khong_dau_hai_cap_nen_22_120kw")
})
app.get('/san-pham/may-nen-khi-piston-bebicon-khong-dau', (req, res) => {
    res.render("san_pham/may_nen_khi_piston_bebicon_khong_dau")
})
app.get('/san-pham/may-say-khi-tac-nhan-lanh-cong-suat-nho-va-vua', (req, res) => {
    res.render("san_pham/may_say_khi_tac_nhan_lanh_cong_suat_nho_va_vua")
})
app.get('/san-pham/may-nen-khi-hitachi-truc-vit-khong-dau-cong-suat-lon-air-zeus-sds-u-series-90-440kw', (req, res) => {
    res.render("san_pham/may_nen_khi_hitachi_truc_vit_khong_dau_cong_suat_lon_air_zeus_sds_u_series_90_440kw")
})
app.get('/san-pham/may-nen-khi-hitachi-truc-vit-ngam-dau-55-75kw', (req, res) => {
    res.render("san_pham/may_nen_khi_hitachi_truc_vit_ngam_dau_55_75kw")
})
app.get('/san-pham/may-nen-khi-hitachi-truc-vit-ngam-dau-55-75kw', (req, res) => {
    res.render("san_pham/may_nen_khi_hitachi_truc_vit_ngam_dau_55_75kw")
})
app.get('/san-pham/may-nen-khi-hitachi-truc-vit-khong-dau-cong-suat-lon-air-zeus-sds-uv-series-180-440kw-2', (req, res) => {
    res.render("san_pham/may_nen_khi_hitachi_truc_vit_khong_dau_cong_suat_lon_air_zeus_sds_uv_series_180_440kw_2")
})
app.get('/san-pham/may-nen-khi-truc-vit-khong-dau-hai-cap-nen-132-240kw', (req, res) => {
    res.render("san_pham/may_nen_khi_truc_vit_khong_dau_hai_cap_nen_132_240kw")
})
app.get('/san-pham/may-nen-khi-hitachi-truc-vit-ngam-dau-18-37kw', (req, res) => {
    res.render("san_pham/may_nen_khi_hitachi_truc_vit_ngam_dau_18_37kw")
})
app.get('/san-pham/may-nen-khi-hitachi-truc-vit-ngam-dau-11-15kw', (req, res) => {
    res.render("san_pham/may_nen_khi_hitachi_truc_vit_ngam_dau_11_15kw")
})
app.get('/san-pham/may-nen-khi-hitachi-truc-vit-ngam-dau-110-160kw', (req, res) => {
    res.render("san_pham/may_nen_khi_hitachi_truc_vit_ngam_dau_110_160kw")
})
app.get('/san-pham/may-nen-khi-hitachi-truc-vit-ngam-dau-90kw', (req, res) => {
    res.render("san_pham/may_nen_khi_hitachi_truc_vit_ngam_dau_90kw")
})
app.get('/san-pham/may-nen-khi-hitachi-truc-vit-khong-dau-mot-cap-nen-15-55kw', (req, res) => {
    res.render("san_pham/may_nen_khi_hitachi_truc_vit_khong_dau_mot_cap_nen_15_55kw")
})
app.get('/san-pham/may-nen-khi-hitachi-truc-vit-ngam-dau-180_250kw', (req, res) => {
    res.render("san_pham/may_nen_khi_hitachi_truc_vit_ngam_dau_180_250kw")
})
app.get('/san-pham/phu-kien-psi', (req, res) => {
    res.render("san_pham/phu_kien_psi")
})
app.get('/san-pham/may-say-khi-tac-nhan-lanh-nano', (req, res) => {
    res.render("san_pham/may_say_khi_tac_nhan_lanh_nano")
})
app.get('/san-pham/may-say-khi-dang-hap-thu-khong-ton-hao-psi', (req, res) => {
    res.render("san_pham/may_say_khi_dang_hap_thu_khong_ton_hao_psi")
})
app.get('/san-pham/may-say-khi-hut-am-orion', (req, res) => {
    res.render("san_pham/may_say_khi_hut_am_orion")
})
app.get('/san-pham/may-nen-khi-hitachi', (req, res) => {
    res.render("san_pham/may_nen_khi_hitachi")
})
app.get('/san-pham/may-nen-khi-hitachi-truc-vit-ngam-dau-180-250kw', (req, res) => {
    res.render("san_pham/may_nen_khi_hitachi_truc_vit_ngam_dau_180_250kw")
})

app.get('/san-pham/loc-khi-nano-noi-ren', (req, res) => {
    res.render("san_pham/loc_khi_nano_noi_ren")
})
app.get('/san-pham/loc-khi-orion', (req, res) => {
    res.render("san_pham/loc_khi_orion")
})
app.get('/san-pham/bo-loc-nuoc-psi', (req, res) => {
    res.render("san_pham/bo_loc_nuoc_psi")
})
app.get('/san-pham/san-pham-noi-bat', (req, res) => {
    res.render("san_pham/san_pham_noi_bat")
})
app.get('/san-pham/may-nen-khi-piston-bebicon-co-dau', (req, res) => {
    res.render("san_pham/may_nen_khi_piston_bebicon_co_dau")
})
app.get('/san-pham/may-say-khi-tac-nhan-lanh-psi', (req, res) => {
    res.render("san_pham/may_say_khi_tac_nhan_lanh_psi")
})
app.get('/san-pham/may-tao-khi-nito-psi', (req, res) => {
    res.render("san_pham/may_tao_khi_nito_psi")
})
app.get('/san-pham/may-bien-ap-abb', (req, res) => {
    res.render("san_pham/may_bien_ap_abb")
})
app.get('/san-pham/may-say-khi-tac-nhan-lanh-cao-ap-psi', (req, res) => {
    res.render("san_pham/may_say_khi_tac_nhan_lanh_cao_ap_psi")
})
app.get('/san-pham/may-say-khi-dang-hap-thu-khong-gia-nhiet-psi', (req, res) => {
    res.render("san_pham/may_say_khi_dang_hap_thu_khong_gia_nhiet_psi")
})
app.get('/san-pham/loc-khi-nano-mat-bich', (req, res) => {
    res.render("san_pham/loc_khi_nano_mat_bich")
})
app.get('/san-pham/loc-khi-ice-has-series', (req, res) => {
    res.render("san_pham/loc_khi_ice_has_series")
})
app.get('/san-pham/phu-tung-may-say-khi-orion', (req, res) => {
    res.render("san_pham/phu_tung_may_say_khi_orion")
})
app.get('/san-pham/may-say-khi-orion-tac-nhan-lanh-cong-suat-lon', (req, res) => {
    res.render("san_pham/may_say_khi_orion_tac_nhan_lanh_cong_suat_lon")
})
app.get('/san-pham/may-phat-dien-cummins', (req, res) => {
    res.render("san_pham/may_phat_dien_cummins")
})
app.get('/san-pham/bo-dieu-khien-trung-tam-multi-roller-exs', (req, res) => {
    res.render("san_pham/bo_dieu_khien_trung_tam_multi_roller_exs")
})


app.get('/san-pham/may-nen-khi-hitachi/may-nen-khi-truc-vit', (req, res) => {
    res.render("san_pham/may_nen_khi_hitachi/may_nen_khi_truc_vit")
})
app.get('/san-pham/may-say-khi-tac-nhan-lanh-nhiet-do-cao-psi', (req, res) => {
    res.render("san_pham/may_say_khi_tac_nhan_lanh_nhiet_do_cao_psi")
})

app.get('/san-pham/may-nen-khi-hitachi/may-nen-khi-piston-bebicon', (req, res) => {
    res.render("san_pham/may_nen_khi_hitachi/may_nen_khi_piston_bebicon")
})
app.get('/san-pham/may-nen-khi-hitachi/may-nen-khi-truc-xoan', (req, res) => {
    res.render("san_pham/may_nen_khi_hitachi/may_nen_khi_truc_xoan")
})
app.get('/may-nen-khi-cao-ap-hertz', (req, res) => {
    res.render("san_pham/may_nen_khi_cao_ap_hertz")
})
app.get('/san-pham/may-nen-khi-cao-ap-hertz', (req, res) => {
    res.render("san_pham/may_nen_khi_cao_ap_hertz/may_nen_khi_cao_ap_hertz")
})
app.get('/san-pham/may-nen-khi-hitachi-truc-xoan-1-5-33kw', (req, res) => {
    res.render("san_pham/may_nen_khi_hitachi_truc_xoan_1_5_33kw")
})
app.get('/san-pham/may-tao-khi-nito', (req, res) => {
    res.render("san_pham/may_tao_khi_nito")
})
app.get('/san-pham/may-tao-khi-nito/may-tao-khi-nito-psi', (req, res) => {
    res.render("san_pham/may_tao_khi_nito/may_tao_khi_nito_psi")
})
app.get('/san-pham/may-tao-khi-nito/may-tao-khi-nito-hitachi', (req, res) => {
    res.render("san_pham/may_tao_khi_nito/may_tao_khi_nito_hitachi")
})
app.get('/san-pham/may-say-khi', (req, res) => {
    res.render("san_pham/may_say_khi")
})
app.get('/san-pham/may-say-khi/may-say-khi-psi', (req, res) => {
    res.render("san_pham/may_say_khi/may_say_khi_psi")
})
app.get('/san-pham/may-say-khi/may-say-khi-orion', (req, res) => {
    res.render("san_pham/may_say_khi/may_say_khi_orion")
})
app.get('/san-pham/may-bien-ap-abb-hitachi', (req, res) => {
    res.render("san_pham/may_bien_ap_abb_hitachi")
})
app.get('/san-pham/san-pham-khac', (req, res) => {
    res.render("san_pham/san_pham_khac")
})


const hostname = '0.0.0.0';
const port = 3000;
const securePort = 3443;

app.get("/healthz", (req, res) => {
    res.status(200)
    res.send("OK")
})

// app.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

https.createServer(options, app).listen(securePort, hostname, (req, res) => {
    console.log("Https server created")
});
http.createServer(app).listen(port, hostname, (req, res) => {
    console.log("HTTP server created")
});

// app.listen(options, securePort, hostname, () => {
//     console.log(`Secure server running at https://${hostname}:${securePort}/`);
// });
