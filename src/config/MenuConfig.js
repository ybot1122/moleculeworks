// https://drive.google.com/file/d/14mx1OLHX8eZRsJ9gvODfvVpRV_mu7QQt
export const MenuConfig = {
  items: [
    {
      id: 'technology',
      title: 'Technology',
      options: [
        {
          name: 'Thin-porous metal sheets',
          subtitle: 'Design and manufacturing of thin porous metal sheets',
          link: 'https://drive.google.com/file/d/1WEHQK4QH0avSJ8G--p18KLh237OdYKd5/preview',
          ppt: 'MWI20191004 Technology_metal sheet processing.pdf',
          id: `sheets`
        },
        {
          name: 'Thin-film ceramic membranes',
          subtitle: 'Design and manufacturing of thin-film ceramic membranes',
          link: 'https://drive.google.com/file/d/1dRd37AIq6LlMafJamokPvc8-GYzV2HxB/preview',
          ppt: 'MWI20191004 Technology_ceramic membrane.pdf',
          id: `ceramic`
        },
        {
          name: 'Molecular sieve membrane',
          subtitle: 'Design and manufacturing of molecular sieve membrane',
          link: 'https://drive.google.com/file/d/188aj-sLcBnSSXsfwYlxylbeCHnN3Qof7/preview',
          ppt: 'MWI20191004 Technology_molecular sieve membrane.pdf',
          id: 'sieve'
        },
        {
          name: 'Molecular sieve membrane (dehumidification)',
          subtitle: 'Dehumidification  mechanism of molecular sieve membrane',
          link: 'https://drive.google.com/file/d/1Ybosd7XQL5m987BCy0DI-mwN8SdIFg4Q/preview',
          ppt: 'MWI20190630Technology dehumidification mechanism.pdf',
          id: 'dehumidification'
        },
        {
          name: 'Membrane modules',
          subtitle: 'Design and fabrication of membrane modules',
          link: 'https://drive.google.com/file/d/1SKwHw4yoqD32fU68BKlzS9IcckK7asc_/preview',
          ppt: 'MWI20190630Technology cassette-type membrane module.pdf',
          id: 'modules'
        }
      ]
    },
    {
      id: 'membrane',
      title: 'Membrane',
      options: [
        {
          name: 'Metal sheet micro-and ultra-filtration membrane',
          link: 'https://drive.google.com/file/d/1y2rgQ6XbpysXSEir8wvE0VcOOCJVHO8n/preview',
          ppt: 'MWI20191007Product_metal sheet MF and UF membrane.pdf',
        },
        {
          name: 'Molecular sieve membrane',
          link: 'https://drive.google.com/file/d/1rS0EhE5vw7S2Mnz9umuxRzvzzbW2qQ_N/preview',
          ppt: 'MWI20191007Product_MS membrane.pdf',
        },
        {
          name: 'Thin porous ceramic ultrafiltration membrane',
          link: 'https://drive.google.com/file/d/1Ust0ceEc7JIwf9ytJU-EjTRmeu94Bu0g/preview',
          ppt: 'MWI20191007Product ceramic membrane UF membrane.pdf',
        },
        {
          name: 'Hydrophobic porous membrane',
          link: 'https://drive.google.com/file/d/1iurg_SkXq8GBNGmtn74sjNVZ6Umy86aG/preview',
          ppt: 'MWI20191008Product_hydrophobic membrane.pdf',
        },
        {
          name: 'Membrane support',
          link: 'https://drive.google.com/file/d/12-8JPXSyMbhcvL5m-mBpKbNlTtJKOZhL/preview',
          ppt: 'MWI20191008Product_metal sheet membrane support.pdf',
        },
        {
          name: 'Membrane Encapsulated Adsorbent Powder',
          link: 'https://drive.google.com/file/d/1_tzCPTenwFEpvnzaZVw9vVz82R9pjCVz/preview',
          ppt: 'MWI20191018Product_membrane-capsulated-adsorbent-powder.pdf',
        },
        {
          name: 'Membrane separator',
          link: 'https://drive.google.com/file/d/1x7k5Dg-5iEN3ctZIyAP-7pQxEmwdjBoG/preview',
          ppt: 'MWI20191008Product_membrane separator.pdf',
        }
      ]
    },
    {
      id: 'device',
      title: 'Device',
      options: [
        {
          name: 'Minature membrane device',
          children: [
            {
              name: 'Miniature filter and separator design (MemXcel)',
              ppt: 'MWI20191008Product_device_MemXcel overview.pdf',
              link: 'https://drive.google.com/file/d/1PmmYs2e3LAjZ7sV2o7JVa2dnKAN9Cmky/preview'
            },
            {
              name: 'Sizes and pressure drops',
              link: 'https://drive.google.com/file/d/1ZFfZlAnpcdXKvjjaiqYd4nqk_F4UxSnq/preview',
              ppt: 'MWI20191008Product_device_MemXcel size and pressure drop .pdf'
            },
            {
              name: 'Assembly procedure',
              ppt: 'MWI20191008Product_device_MemXcel assembly_rev1.pdf',
              link: 'https://drive.google.com/file/d/18t0Yt4ETEIqjHGGmMWBLK16VNj4dMEyu/preview',
              video: 'https://drive.google.com/file/d/118LSi9CJv0gjGKqeV-Hu_pvx9dGYrTOi/preview'
            }
          ]
        },
        {
          name: 'Gas filtration',
          link: 'https://drive.google.com/file/d/1yoBE6XCMp0JC2zDfyWOOpo5XgVeTkfYf/preview',
          ppt: 'MWI20191010Product_device_MemXcel gas filtering.pdf',
          video: 'https://drive.google.com/file/d/119fggOpNa0E4_wklgy4RAXMztMj5gsMD/preview'
        },
        {
          name: 'Liquid filtration',
          children: [
            {
              name: 'Flow-through online filtering',
              ppt: 'MWI20190630Product_MemXcel  Flowthrough online liquid filtering.pdf',
              link: 'https://drive.google.com/file/d/1Xl9y-FqkTIbLcwlOi08d_6BhNfeBaPK_/preview',
              video: 'https://drive.google.com/file/d/11NfYzqFfW7iHYiogbosuL1UVlTJmRTth/preview'
            },
            {
              name: 'Flow-through filtering with syringe feed',
              ppt: 'MWI20190630Product_MemXcel  Flowthrough by syringe pump.pdf',
              link: 'https://drive.google.com/file/d/1-KErWCREGfxSlRZZMYmKP3JBTxGFgf2L/preview',
              video: 'https://drive.google.com/file/d/11K8GEsX5baJO6mimS9FoMg6b9nSG6bW8/preview'
            },
            {
              name: 'Flow-through filtering with gravity feed',
              ppt: 'MWI20190630Product_MemXcel  Flowthrough by gravity feed.pdf',
              link: 'https://drive.google.com/file/d/172obywaAUV9ICVekAHhZYvPUtOHs4BG_/preview',
              video: 'https://drive.google.com/file/d/1fAkPvU4nfD4oEHoJJB3WvDivSu0Fy9_3/preview'
            },
            {
              name: 'Recovery of nano- and micro-particles',
              ppt: 'MWI20190630Product_MemXcel  Flowthrough for nano and micro-particle recovery.pdf',
              link: 'https://drive.google.com/file/d/1gJCU5y7z84NuBoNpY5vimfifaShIEsqZ/preview',
              video: 'https://drive.google.com/file/d/11R5fdMDaksCrt-tYtDfpEyC-wyivKp-5/preview'
            },
            {
              name: 'Cross-flow filtering for concentration',
              ppt: 'MWI20190630Product_MemXcel  Crossflow filtration_rev1.pdf',
              link: 'https://drive.google.com/file/d/1gV-LXIwhr7mVXRyLzVG4y3PDMf2DqVae/preview',
              video: 'https://drive.google.com/file/d/11PjjLTs175mqIZ1W9Ju8EfpUh9P6_aFd/preview'
            },
            { 
              name: 'Membrane offline cleaning',
              video: 'https://drive.google.com/file/d/1198jFn1E3OEPPzI1lyfjN9OA_VHu6dI7/preview'
            }
          ]
        },
        {
          name: 'Adsorption using powder materials (MEPA)',
          children: [
            {
              name: 'Adsorption testing cell assembly',
              ppt: 'AB2191018_Product_Device_adsorption test cell assembly.pdf',
              link: 'https://drive.google.com/file/d/1KbewjJy77eGHAI1e7lg7jBQNHKlzEd5X/preview'
            },
            {
              name: 'Gas adsorption by flow over',
              ppt: 'MWI20191016ProductMemXcel_gas adsorption with adsorbent powder.pdf',
              link: 'https://drive.google.com/file/d/11rpZTRT07TixeMnrwxj-kpmGYYE1JF9w/preview'
            },
            {
              name: 'Liquid flow-through adsorption and filtering',
              ppt: 'MWI20191016ProductMemXcel_liquid adsorption with adsorbent powder.pdf',
              link: 'https://drive.google.com/file/d/1aCTzrtpF4DT9B1_Ej2JSMM6yXGih8fm2/preview'
            },
          ]
        },
        {
          name: 'Gas-liquid two-phase management',
          children: [
            {
              name: 'Liquid degas by vacuum filtration',
              ppt: 'MWI20191019ProductMemXcel_liquid degas.pdf',
              link: 'https://drive.google.com/file/d/1vKx_XNdW-yk_xa3ZyVDwQgtDP3Bvuvsx/preview',
              video: 'https://drive.google.com/file/d/1CM4QdtidTMuQKuE1S2ig-0QeXOBcAk2u/preview'
            },
            {
              name: 'Gas dispersion into liquid',
              ppt: 'MWI20191017ProductMemXcel_gas dispersion into liquid.pdf',
              link: 'https://drive.google.com/file/d/17q6Pp-_7QM19b_pZd0I7jUKfauSlQsY_/preview',
              videos: [
                'https://drive.google.com/file/d/1sw_KD2bp8aOWFvh_bhgXg9kCkqcepMxG/preview',
                'https://drive.google.com/file/d/1hpa5TNYy9JCsxzvzHTW3hb8WxZAJe_AI/preview',
                'https://drive.google.com/file/d/1t7XPtJqld3VuENeQyeUcl0VUMOcdupUt/preview'
              ]
            },
            {
              name: 'Gas/liquid membrane contactor - CO2 absorption',
              ppt: 'MWI20191016ProductMemXcel_gas_liquid_absorption_CO2.pdf',
              link: 'https://drive.google.com/file/d/18sA7lMIun7cn6gID7HKDZwapcazOiVMl/preview',
              video: 'https://drive.google.com/file/d/1X7_zHP9LQn22uWwta6x5xK7U-gw7JbDz/preview'
            },
            {
              name: 'Gas/liquid membrane contactor - ammonia absorption',
              ppt: 'MWI20191016ProductMemXcel_gas_liquid_absorption_ammonia.pdf',
              link: 'https://drive.google.com/file/d/1N60Su0AG0PkHHjbjgT3zB6OH0oPsBvCn/preview',
              video: 'https://drive.google.com/file/d/1X7de3kQGI9WeGTdZ33P8KeHVz8_hLMiF/preview'
            }
          ]
        },
        {
          name: 'Gas humidity management',
          children: [
            {
              name: 'Humidification',
              ppt: 'MWI20190630ProductMemXcel_Gas humidification_rev1.pdf',
              link: 'https://drive.google.com/file/d/1vCe7jZ_aOez9vL47BCCAme2HbXMf03D2/preview',
              video: 'https://drive.google.com/file/d/11SpAk1qLeKjHuWyVDxr0ilUkiFlLGlQv'
            },
            {
              name: 'Dehumidification by dry gas sweep',
              ppt: 'MWI20190630ProductMemXcel_Gas dehumidification by gas sweep.pdf',
              link: 'https://drive.google.com/file/d/13MWy40cnVpYJGpikhKI7IejV9RGWt8Wo/preview',
              videos: [
                'https://drive.google.com/file/d/11T9ySImJRN4Kqm1Vm0s-xDM4zJIWY6P4/preview',
                'https://drive.google.com/file/d/11sFys1szn80qRkhDRBxKfXM5ESlnfFEO/preview'
              ]
            },
            {
              name: 'Dehumidification of human breath',
              ppt: 'MWI20190630ProductMemXcel_dehumidification of human breath by gas sweep.pdf',
              link: 'https://drive.google.com/file/d/1O0WQOnema3UuPF7fwWmTDSm6RO8v6Foc/preview'
            },
            {
              name: 'Dehumidification using ambient air',
              ppt: 'MWI20190630ProductMemXcel_Gas dehumidification by use of ambient air.pdf',
              link: 'https://drive.google.com/file/d/1gUB6mtso00lxnkh-UhuoBBe4FwSCusjq/preview',
              video: 'https://drive.google.com/file/d/11iYeLt1bboJKx2c54UIORrXqm9J0LHHe/preview'
            },
            {
              name: 'Dehumidification by vacuum',
              ppt: 'MWI20190630ProductMemXcel_Gas dehumidification by vacuum.pdf',
              link: 'https://drive.google.com/file/d/1duA_asp3bxxo8N0WAC0X0SVdAz62ojre/preview',
              video: 'https://drive.google.com/file/d/11nvSBgbyEaMqUCH_VEzxmNyVfidJYDgS/preview'
            },
            {
              name: 'Dehumidification by liquid desiccant',
              ppt: 'MWI20190630ProductMemXcel_Gas dehumidification by liquid desiccant sweep.pdf',
              link: 'https://drive.google.com/file/d/1g94Y3UB1Liy77ZILrH2YLH2FWMKO4Gue/preview',
              video: 'https://drive.google.com/file/d/11pHXV8CLwi4tOl2zCfCaZc3ygKZb0reu/preview'
            },
          ]
        }
      ]
    },
    {
      id: 'order',
      title: 'Product Order',
      options: [
        {
          name: 'Polycarbonate MemXcel unit',
          ppt: 'MWI20191104ProductOrder_MemXcel_PC_rev2.pdf',
          link: 'https://drive.google.com/file/d/1k17X9W-UURJEhqEH5D0rsYt9hM9qJZew/preview'
        },
        {
          name: 'Stainless steel MemXcel unit',
          ppt: 'MWI20191104ProductOrder_MemXcel_stainless steel_rev2.pdf',
          link: 'https://drive.google.com/file/d/1kA5frnK1nz63tuvRPFybdSqO6alKjVXc/preview'
        },
        {
          name: 'Thin porous metal sheet MF and UF membrane',
          ppt: 'MWI20191007ProductOrder_porous metal sheet filtration membrane_rev1.pdf',
          link: 'https://drive.google.com/file/d/1A6SAaFAVoXblx4-LmfpI4K-pqNz9Ez3z/preview'
        },
        {
          name: 'Thin zeolite membrane sheet',
          ppt: 'MWI20191007ProductOrder_thin zeolite membrane sheet_rev1.pdf',
          link: 'https://drive.google.com/file/d/1xPRvxAWx36PpwaenauSia_kAl51HTAk7/preview'
        },
        {
          name: 'Thin hydrophobic membrane sheet',
          ppt: 'MWI20191007ProductOrder_hydrophobic membrane sheet_rev1.pdf',
          link: 'https://drive.google.com/file/d/1poCfZvwDk6X7OG9XCtRaDU1jxrK3zAjC/preview'
        },
        {
          name: 'Thin porous metal sheet membrane support',
          ppt: 'MWI20191007ProductOrder_thin porous metal sheet membrane support_rev1.pdf',
          link: 'https://drive.google.com/file/d/1zDyHN0lYAQO1A4r6w0ykX0IeX3xIOTQh/preview'
        },
        {
          name: 'Membrane-encapsulated planar adsorbent (MEPA) plate',
          ppt: 'AB2191018ProductOrder_parts for Membrane-encapsulated planar adsorbent (MEPA) plate.pdf',
          link: 'https://drive.google.com/file/d/18uMkIM8-oymoizuLlL4BpDD6yTvXIynf/preview'
        },
        {
          name: 'Thin ceramic membrane separator',
          ppt: 'MWI20191007ProductOrder_thin ceramic membrane separator_rev1.pdf',
          link: 'https://drive.google.com/file/d/1uzqn4xq-b6fmNa5WnohNW-JjcehhSiyL/preview'
        },
      ]
    },
    {
      id: 'development',
      title: 'Business Development',
      options: [
        {
          name: 'High-flux water filter',
          ppt: 'MWI20191021 Industrial Application_high flux water filter_rev1.pdf',
          link: 'https://drive.google.com/file/d/1R5jBLL21begJtaXBEx_QwPWy88F3PUwX/preview'
        },
        {
          name: 'Air and gas particulate filter',
          ppt: 'MWI20191021 Industrial Application_air and gas particulate filter_rev1.pdf',
          link: 'https://drive.google.com/file/d/1zp7VcJRF38n6IOFg0PtLzqcrBxFSFkh0/preview'
        },
        {
          name: 'Hot oil and vapor filter',
          ppt: 'MWI20191021 Industrial Application_hot oil and vapor filter_rev1.pdf',
          link: 'https://drive.google.com/file/d/1EQGSRP2eWkKKPl-M7gk3e2V0D8ic2KQo/preview'
        },
        {
          name: 'Humidity and thermal exchange',
          ppt: 'MWI20191021 Industrial Application_humidity and thermal exchange_rev1.pdf',
          link: 'https://drive.google.com/file/d/1k7qo_NXcMnlMXAJVWFYimO0ThC-pJGvd/preview'
        },
        {
          name: 'Warm air and gas dehumidification',
          ppt: 'MWI20191021 Industrial Application_warm air and gas dehumidification_rev1.pdf',
          link: 'https://drive.google.com/file/d/1DQWmEY_goMu2yO2AN1wERM18ELqfcDD8/preview'
        },
        {
          name: 'Dehydration of hot ethanol and process streams',
          ppt: 'MWI20191021 Industrial Application_dehydration of hot ethanol and process streams_rev1.pdf',
          link: 'https://drive.google.com/file/d/1oGeuko_Rj5FA0MnlEjxipNzCnL5l2DY7/preview'
        },
        {
          name: 'Molecular filter for sensors',
        },
        {
          name: 'Catalytic conversion of plastics into liquid fuels',
        },
        {
          name: 'Alkaline water electrolysis',
        }
      ]
    },
    {
      id: 'contact',
      url: '/contact',
      title: 'Contact'
    }
  ],
};