"steam/cached/SettingsSubInterface.res"
{
	layout
	{
		region { name=box margin-top=24 margin-bottom=24 margin-left=24 }

		region { name=top region=box width=647 margin-top=12 margin-left=24 }
		region { name=topleft region=top width=275 x=1 }
		region { name=topright region=top width=275 x=348 }

		region { name=middle region=box width=647 y=178 margin-left=24 }
		region { name=middleleft region=middle width=275 x=1 }
		region { name=middleright region=middle width=275 x=348 }
		
		region { name=bottom region=box width=647 y=308 margin-left=24 }
		region { name=bottomleft region=bottom width=330 x=1 }
		region { name=bottomright region=bottom width=287 x=348 }



		place { region=topLeft control="LabelLanguageCombo" margin-top=24 width=max dir=down }
		place { region=topLeft control="LanguageCombo" start=LabelLanguageCombo margin-top=12 width=max height=32 dir=down }
		place { region=topLeft control="TranslationLabel" start=LanguageCombo margin-top=6 width=max dir=down }

		place { region=topRight control="Label1" dir=down margin-top=24 }
		place { region=topRight control="FavoriteWindowCombo" start=Label1 width=max height=32 margin-top=12 dir=down }

		place { region=middleleft control="Label3" margin-top=24 dir=down }
		place { region=middleleft control="SkinCombo" start=Label3 margin-top=12 width=max height=32 dir=down }

		place {	region=middleright control="SetJumpListOptionsButton" margin-top=24 width=max height=32 dir=down }

		place { region=bottom control="AutoLaunchCheck,DWriteCheck,BigPictureModeCheck,UrlBarCheck,H264HWAccelCheck,SmoothScrollWebViewCheck,DPIScalingCheck,GPUWebViewCheck,NotifyAvailableGamesCheck" margin-top=24 width=max height=24 spacing=6 dir=down } //82
		//place { region=bottomleft control="" margin-top=24 width=330 height=24 spacing=6 dir=down }
		//place { region=bottomright control="" margin-top=24 width=max height=24 spacing=6 dir=down }

		//qplace { region=bottomright control="" margin-top=24 width=287 height=max spacing=6 dir=down }
		
		
		//Hidden
		place {	control="Divider1,Divider2,Divider3" dir=down margin-left=-999 }
	}
}