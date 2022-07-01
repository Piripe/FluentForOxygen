"Steam/cached/AccountPage.res"
{
	styles {
		Divider
		{
			bgcolor=white12
		}
	}

	controls {
		tabLabel {controlname="Label" labeltext="Account"}
	}

	layout {
		region { name=box margin-left=24 margin-right=24 margin-top=48 }

		//Tab Title
		place { region=box control="tabLabel" dir=right y=0 width=2 height=32 spacing=8 }

		//Security Icon
		place { region=box control="SecurityIcon" dir=right y=8 spacing=6 }

		///Information
		place { region=box control="LogOutLabel,AccountInfo" x=89 y=7 spacing=6 }
		place { region=box control="ContactEmailLabel,EmailInfo" x=89 y=27 spacing=6 }
		place { region=box control="SecurityStatusLabel,SecurityStatusState" x=89 y=47 spacing=6 }
		place { region=box control="Label2,VacInfoLink" x=89 y=67 spacing=6 }

		place { region=box control="NoPersonalInfoCheck" x=24 y=123 spacing=8 dir=down }
		place { region=box control="Label1" x=60 y=167 spacing=8 dir=down }

		//Security Information
		place { region=box start=Label1 control="ChangeUserButton,ManageSecurityButton,ChangePasswordButton,ChangeContactEmailButton,ValidateContactEmailButton,MachineLockAccountButton" margin-top=72 margin-left=-36 width=337 height=32 dir=down spacing=8 }


		//Beta Participation
		place { region=box control="BetaParticipationLabel" x=24 y=518 dir=down }
		place { region=box start=BetaParticipationLabel control="ChangeBetaButton" x=18 y=-5 width=84 height=32  }
		place { region=box  control="CurrentBetaLabel" x=24 y=545 height=32 }

		//Hidden
		place { control="ReportBugLink,AccountLink,Divider1,Divider2" dir=down margin-left=-999 }
	}
}