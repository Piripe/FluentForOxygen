"Public/SteamLoginDialog.res"
{
	color
	{
		redborder="169 72 71 255"
	}
		
	styles
	{
		CSteamLoginDialog {
			minimum-width=496
			minimum-height=493

			render_bg {
				//Page 1
                1="fill(x0+32,y0+65,x1-32,y0+357,BackgroundFillColorCardBackgroundSecondary)"
                1="image(x0+24,y0+57,x0+32,y0+65,fluent/frame/borders/1/tl.tga)"
                1="image_tiled(x0+32,y0+57,x1-32,y0+65,fluent/frame/borders/1/t.tga)"
                1="image(x1-32,y0+57,x1-24,y0+65,fluent/frame/borders/1/tr.tga)"
                1="image_tiled(x1-32,y0+65,x1-24,y0+357,fluent/frame/borders/1/r.tga)"
                1="image(x1-32,y0+357,x1-24,y0+365,fluent/frame/borders/1/br.tga)"
                1="image_tiled(x0+32,y0+357,x1-32,y0+365,fluent/frame/borders/1/b.tga)"
                1="image(x0+24,y0+357,x0+32,y0+365,fluent/frame/borders/1/bl.tga)"
                1="image_tiled(x0+24,y0+65,x0+32,y0+357,fluent/frame/borders/1/l.tga)"

				//Page 2
                1="fill(x0+32,y0+397,x1-32,y0+461,BackgroundFillColorCardBackgroundSecondary)"
                1="image(x0+24,y0+389,x0+32,y0+397,fluent/frame/borders/1/tl.tga)"
                1="image_tiled(x0+32,y0+389,x1-32,y0+397,fluent/frame/borders/1/t.tga)"
                1="image(x1-32,y0+389,x1-24,y0+397,fluent/frame/borders/1/tr.tga)"
                1="image_tiled(x1-32,y0+397,x1-24,y0+461,fluent/frame/borders/1/r.tga)"
                1="image(x1-32,y0+461,x1-24,y0+469,fluent/frame/borders/1/br.tga)"
                1="image_tiled(x0+32,y0+461,x1-32,y0+469,fluent/frame/borders/1/b.tga)"
                1="image(x0+24,y0+461,x0+32,y0+469,fluent/frame/borders/1/bl.tga)"
                1="image_tiled(x0+24,y0+397,x0+32,y0+461,fluent/frame/borders/1/l.tga)"

				2="image(x0+168,y0+81,x1-168,y0+129,fluent/dialogs/steamLoginDialog/steamLogo.tga)"
			}
		}
		"loginprocess_style_head"
		{
			"font-size"		"16"
			"font-style"		"italic"
		}

		"loginprocess_style_body"
		{
			"font-size"		"18"
			"font-weight"		"1000"
			"font-style"		"regular"
		}

		"loginerror_style_body"
		{
			"font-size"		"14"
			textcolor=FillColor_Text_Primary
			bgcolor=none
			padding=8

			render_bg
			{
				0="fill( x0 - 4, y0 - 4, x1 + 2, y0 -2, redborder )"  // top
				1="fill( x0 - 4, y1 + 2, x1 + 2, y1 + 4, redborder )"  // bottom
				2="fill( x0 - 4, y0 - 4, x0 - 2, y1 + 4, redborder )"  // left
				3="fill( x1 + 2, y0 - 4, x1 + 4, y1 + 4, redborder )"  // right
			}
		}
	}
	layout {
		region { name=box margin-left=48 margin-top=141 margin-right=48 }

		place { region=box control="UserNameLabel" dir=down }
		place { region=box control="UserNameEdit" start=UserNameLabel margin-top=6 width=max height=32 dir=down }
		place { region=box control="PasswordLabel" start=UserNameEdit margin-top=6 dir=down }
		place { region=box control="PasswordEdit" start=PasswordLabel margin-top=6 width=max height=32 dir=down }
		place { region=box control="SavePasswordCheck" start=PasswordEdit margin-top=6 width=max height=32 dir=down }
		place { region=box control="LoginButton" start=SavePasswordCheck margin-top=12 width=192 height=32 dir=down }
		place { region=box control="CancelButton" start=LoginButton margin-left=12 width=192 height=32 dir=right }

		place { region=box control="LostPasswordButton" start=LoginButton margin-top=72 width=192 height=32 dir=down }
		place { region=box control="CreateNewAccountButton" start=LostPasswordButton margin-left=12 width=192 height=32 dir=right }

		//Hidden
		place { control="ImagePanelLogo,Divider1,Label4,Label2" dir=down margin-left=-999 }
	}
}

