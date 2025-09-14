
import GalleryItem from "./GalleryItem";

const galleryData = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNVtKdVoSHnCLT13fQG5ipB7Q_FbHU0azBboTxCqyTNhsEw7DT5o09OZoWOuVRXIPxU_GbG7N9ZRaFkuRbKJPlWbI1qqn62_mIh-afSpu6aBnvypi-7vpdMXH3MrA_wmXlxBUeBdgpV8NwUEuQNB8sslk9kqhUnFH7mOTXf_jpNA7vxrsb7vKlbxverrH134ekuNC8dM3Z4SVZ83UoBGAbx15SfcS7fb7Bt31XZUgHSIkNZ7xvHUYKrcG6nv8WDHVbPkfhToS2Jg",
      alt: "AI generated image of a futuristic city",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7xg6CG25VjN8rPe30nkShKmlzGOFMoHlWXdcuZ3eMS-AUBwyV3a9-ny-nh4UmS6fimHbCgWj4LOXdDkwtVMM7-Y6Kol-QeKkEgVnDU_cOqf_kY8yXZ9NL3un3z1IZhI8cUB1ogU5tnjjPFuAnxPysJuooJnjHlA6QInnYAEBY9v2qMauOCO7bUhyz1YTRl8V6e1Y4mwtWl_uIRK2GbTPEe8qzeMftoIMZp_an2fqV6QemKdPrW3JmKq1JzpuVJuPWIwyNKKVR8w",
      alt: "AI generated image of a surreal landscape",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrXhGKArcMJsjF_Z007p8lHpbVLUtQWwZbnekalu_3r8GLh0_SSk_47V77VZ6UxO8-kMMv0OvwdBl_vWJd-i-EphjYegDWVPn9ZTAeasmso7inJDG_-6hx2eClcJJy94ujtUfdqsKEuGVuiIZBgU7YTAQlozYkWgXATv8Q0XwPK7TfGaZ7SfsU6xLixJfi9U0ESpoh1T52HngqafwegGDf88LbtP8jLBKX6mhMS9ScyvnpK2dDUk7FDbBnTq_hPK4uE5muzjJEkg",
      alt: "AI generated image of an abstract pattern",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnoq25P4Rmb_RRrtIap8xeujVp120-INxT9CHTTB346qS0i28ygH6YKMOe17gWaGyfquH44Ee4A_92_bJ3dAa_fwKEhIhdX0u-23iOB097uZL92oFtVGX-qdWIMpIsx0_q2CVcZAh9IsE7JGMqxJvJml7OxwNYrTYBGMzYboOp27V1hLCTFw46up2gm4G8nFzp4f4OAEJnii5vjKMs2mTCEhQ3_iOCf9kKOgWRbThhmJWlFHVIVvL5W4PP8AWL6pgJnOsN7N5Vcg",
      alt: "AI generated portrait of a woman",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC824AbfbE00Imfoo2CXFTAY_EB6wPIBsrXL7SZEKlqpj-2k3MBuE3skZAb3K2g3UvwXRlQl2qcpiUYQBgnbgr0F09UAiPnpFnuHbqd1C4XWihM1AqG9qu4u-cT-A0lFi_LsWth9Qag3axHAvacbrnbZtnqwQoi-2bSge59H3OoOlVmVwH2vPeo8H-3hUJP5FVuHTQwB4HP9w3YIWT1tsKXC8Sd5LEsMGTrElohO2L3x9lp1AVwYSUWIKFwYKtpJGYnDVLWhNtdRA",
      alt: "AI generated image of a fantasy creature",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8_6n8MtbI6uf0A2rf9m6hQ1GqezZXJB3-idQbBkXNerFCfuKFubzmT2LvHK7lw4TGdt3BaVPGkh5jxbk9MTCf2MuMefLe4NY57GRBoGY5okYwU4R9450Y6SdgqGlzJ6-43E5H3Cr6pfLDc7llxi-qNlAkDoQ9REjzksMdoYaIbQ634PlFcmXFHsHOiUkttpSbrH9E_CsJbYOOHGlaFCsDaV9wlKfyVY2B0qshNCsJ4u-gVY47iSkfrdaDvhIWhCXYSp51brLT1w",
      alt: "AI generated architectural design",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXv0Cn5G-gMW5u7uEk3XXa7Yx0AYVFETrPFQioaizZYAbLmWeh6bHjjknNVZj6EE-0rItfs5UxEEwB4jBmFzA2Vp1oFeVme22weuzqDdmHAcHKXMBIUX8aM7Nim1Ugb3U0B3YJ7p92ptBgr8IcgAq1xxrZKjFg6QGNyHEruFBYC6OS9gAbby1Wj37UNjAmskSdkQz3X7cvARuTvcHFo4oyoyIC6RK6km59wVeYUlcO3QiI2WKHOIBNGd335IZ9WOO7scxfJvxLjw",
      alt: "AI generated food photography",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUeK2aFIO89d6HWBYYsOJ2RJHR9Pcpn3OqUJXqP00BLV6AFD6P9lU4I1Uo6bYEm9Pr8KZ4AU487_0ZPICFdcEgaWoyn9ry2TI6qBxfViiaj9m2mD5JypXXQZnlqba2YvjNlJH0t4I_qLKgx071HF2dBflNEVQ5Zf0i_99WwsN70XdXke_IaqRcFd-pINyho4TXiWl0_FrUcP7yM63SklPKTzX2olNCmJA3xa-W4Of5CNN9H7OF-Y8-IrQsuQqKen-BkxF0xXD4PA",
      alt: "AI generated logo concept",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL9PV1paKn5edMWg0hRc9w2CpSzU3G5ghFraH9d5UjNeCW_2g3UsYLp1hzd8vBFg_YUhMsrqrBn8xkRvLg3HRKGYY6NxvZzE8jllUTyLBlxxvqOqIq6FvbttJXGSfD37w6xmlS6Fsi1jhgXZpvq761scDWVv-VSYSelXOSO5_gHnafdJ1YaX71Cm34-sVmc5pxOXvxWogyRLLTEa7PLhpUSyALESTQCynyEe2jOCAwlbOX2tTj6HE1gUb3tmB43cQn7vMbx_rMBA",
      alt: "AI generated vehicle design",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoPGJxazlFGx8gy6skq16RKJBnwbKfuyoSEM8_vBy0LKkKy5lNwUiJOirI8tvHWifl_67ZbYyGP8qaMcpWNNjsz5ePa3LopY8E9Q6j1FwHCwNZXLJN2OG-pab3dztyjAntcBs5ikdSZnR3lFZwi8i_DqEA16UbSfrU1j2rLnCxewvl68k2O2N-sK3UdhezW6Ljubsy-OwZdbpm4hJT8y0iu2O0FeQE7pCVYqoyf8U6jXgxktySVTyAeVm9RByBI7UJ_5vxsE9Cbw",
      alt: "AI generated illustration of nature",
    },
  ];
  

export default function Gallery() {
  return (
    <div className="mt-12 px-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Gallery</h2>
       
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {galleryData.map((img, i) => (
          <GalleryItem key={i} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
}
