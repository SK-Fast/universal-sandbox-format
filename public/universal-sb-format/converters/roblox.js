const uF = require('../utils/universal-format.js')

const metadata = {
    platformName: "Roblox [HEAVILY WIP]",
    supportedVersion: `^20001c2f99364dfd`,
    fileExtension: `.rbxlx`,
    fileType: "text",
    toNote: "- Rotation will not work because Brick Hill does not support it."
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function resolveColorUint8(color) {
    const colorArray = new Uint8Array([color.b * 255, color.g * 255, color.r * 255, 255])
    const length = colorArray.length;

    const buffer = Buffer.from(colorArray);
    const result = buffer.readUIntBE(0, length);
    console.log(result)

    return result;
}

function fromUniversal(u) {
    let result = ""

    result += `<roblox xmlns:xmime="http://www.w3.org/2005/05/xmlmime" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://www.roblox.com/roblox.xsd" version="4">
	<External>null</External>
	<External>nil</External>
	<Item class="Workspace" referent="RBX0A903F2EF49C4FF1A22D8B754BA0A3D6">
		<Properties>
			<float name="AirDensity">0.00120000006</float>
			<bool name="AllowThirdPartySales">false</bool>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<token name="AvatarUnificationMode">0</token>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<token name="ClientAnimatorThrottling">0</token>
			<BinaryString name="CollisionGroupData">AQEABP////8HRGVmYXVsdA==</BinaryString>
			<Ref name="CurrentCamera">RBX3DC5131D88A3468D80929800B3323D1A</Ref>
			<bool name="DefinesCapabilities">false</bool>
			<double name="DistributedGameTime">0</double>
			<token name="EditorLiveScripting">0</token>
			<bool name="ExplicitAutoJoints">true</bool>
			<float name="FallenPartsDestroyHeight">-500</float>
			<token name="FluidForces">0</token>
			<Vector3 name="GlobalWind">
				<X>0</X>
				<Y>0</Y>
				<Z>0</Z>
			</Vector3>
			<float name="Gravity">196.199997</float>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<token name="IKControlConstraintSupport">0</token>
			<token name="InterpolationThrottling">0</token>
			<token name="LevelOfDetail">0</token>
			<token name="MeshPartHeadsAndAccessories">0</token>
			<CoordinateFrame name="ModelMeshCFrame">
				<X>0</X>
				<Y>0</Y>
				<Z>0</Z>
				<R00>1</R00>
				<R01>0</R01>
				<R02>0</R02>
				<R10>0</R10>
				<R11>1</R11>
				<R12>0</R12>
				<R20>0</R20>
				<R21>0</R21>
				<R22>1</R22>
			</CoordinateFrame>
			<SharedString name="ModelMeshData">yuZpQdnvvUBOTYh1jqZ2cA==</SharedString>
			<Vector3 name="ModelMeshSize">
				<X>0</X>
				<Y>0</Y>
				<Z>0</Z>
			</Vector3>
			<token name="ModelStreamingBehavior">0</token>
			<token name="ModelStreamingMode">0</token>
			<string name="Name">Workspace</string>
			<bool name="NeedsPivotMigration">false</bool>
			<token name="PhysicsSteppingMethod">0</token>
			<Ref name="PrimaryPart">null</Ref>
			<token name="RejectCharacterDeletions">0</token>
			<token name="ReplicateInstanceDestroySetting">0</token>
			<token name="Retargeting">0</token>
			<float name="ScaleFactor">1</float>
			<token name="SignalBehavior2">0</token>
			<int64 name="SourceAssetId">-1</int64>
			<token name="StreamOutBehavior">2</token>
			<bool name="StreamingEnabled">true</bool>
			<token name="StreamingIntegrityMode">3</token>
			<int name="StreamingMinRadius">64</int>
			<int name="StreamingTargetRadius">1024</int>
			<BinaryString name="Tags"></BinaryString>
			<bool name="TerrainWeldsFixed">true</bool>
			<bool name="TouchesUseCollisionGroups">false</bool>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b5664</UniqueId>
			<OptionalCoordinateFrame name="WorldPivotData">
				<CFrame>
					<X>0</X>
					<Y>0</Y>
					<Z>0</Z>
					<R00>1</R00>
					<R01>0</R01>
					<R02>0</R02>
					<R10>0</R10>
					<R11>1</R11>
					<R12>0</R12>
					<R20>0</R20>
					<R21>0</R21>
					<R22>1</R22>
				</CFrame>
			</OptionalCoordinateFrame>
		</Properties>
		<Item class="Camera" referent="RBX3DC5131D88A3468D80929800B3323D1A">
			<Properties>
				<BinaryString name="AttributesSerialize"></BinaryString>
				<CoordinateFrame name="CFrame">
					<X>8.91156006</X>
					<Y>12.3026323</Y>
					<Z>36.2627449</Z>
					<R00>-0.636527479</R00>
					<R01>0.482872605</R01>
					<R02>-0.601387441</R02>
					<R10>-0</R10>
					<R11>0.779752731</R11>
					<R12>0.626087606</R12>
					<R20>0.771254063</R20>
					<R21>0.39852196</R21>
					<R22>-0.496334016</R22>
				</CoordinateFrame>
				<Ref name="CameraSubject">null</Ref>
				<token name="CameraType">0</token>
				<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
				<bool name="DefinesCapabilities">false</bool>
				<float name="FieldOfView">70</float>
				<token name="FieldOfViewMode">0</token>
				<CoordinateFrame name="Focus">
					<X>10.1143351</X>
					<Y>11.050457</Y>
					<Z>37.2554131</Z>
					<R00>1</R00>
					<R01>0</R01>
					<R02>0</R02>
					<R10>0</R10>
					<R11>1</R11>
					<R12>0</R12>
					<R20>0</R20>
					<R21>0</R21>
					<R22>1</R22>
				</CoordinateFrame>
				<bool name="HeadLocked">true</bool>
				<float name="HeadScale">1</float>
				<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
				<string name="Name">Camera</string>
				<int64 name="SourceAssetId">-1</int64>
				<BinaryString name="Tags"></BinaryString>
				<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b725d</UniqueId>
				<bool name="VRTiltAndRollEnabled">false</bool>
			</Properties>
		</Item>
		<Item class="Terrain" referent="RBX39E6B8C33BC14B93962A2E0147035474">
			<Properties>
				<token name="AcquisitionMethod">0</token>
				<bool name="Anchored">true</bool>
				<BinaryString name="AttributesSerialize"></BinaryString>
				<float name="BackParamA">-0.5</float>
				<float name="BackParamB">0.5</float>
				<token name="BackSurface">0</token>
				<token name="BackSurfaceInput">0</token>
				<float name="BottomParamA">-0.5</float>
				<float name="BottomParamB">0.5</float>
				<token name="BottomSurface">4</token>
				<token name="BottomSurfaceInput">0</token>
				<CoordinateFrame name="CFrame">
					<X>0</X>
					<Y>0</Y>
					<Z>0</Z>
					<R00>1</R00>
					<R01>0</R01>
					<R02>0</R02>
					<R10>0</R10>
					<R11>1</R11>
					<R12>0</R12>
					<R20>0</R20>
					<R21>0</R21>
					<R22>1</R22>
				</CoordinateFrame>
				<bool name="CanCollide">true</bool>
				<bool name="CanQuery">true</bool>
				<bool name="CanTouch">true</bool>
				<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
				<bool name="CastShadow">true</bool>
				<string name="CollisionGroup">Default</string>
				<int name="CollisionGroupId">0</int>
				<Color3uint8 name="Color3uint8">4288914085</Color3uint8>
				<PhysicalProperties name="CustomPhysicalProperties">
					<CustomPhysics>false</CustomPhysics>
				</PhysicalProperties>
				<bool name="Decoration">false</bool>
				<bool name="DefinesCapabilities">false</bool>
				<bool name="EnableFluidForces">true</bool>
				<float name="FrontParamA">-0.5</float>
				<float name="FrontParamB">0.5</float>
				<token name="FrontSurface">0</token>
				<token name="FrontSurfaceInput">0</token>
				<float name="GrassLength">0.699999988</float>
				<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
				<float name="LeftParamA">-0.5</float>
				<float name="LeftParamB">0.5</float>
				<token name="LeftSurface">0</token>
				<token name="LeftSurfaceInput">0</token>
				<bool name="Locked">true</bool>
				<bool name="Massless">false</bool>
				<token name="Material">256</token>
				<BinaryString name="MaterialColors"><![CDATA[AAAAAAAAb34+WFlWmJiYimFJz8unrJRsY2Rm3eTl6/3/lHxfeXBiS0pKjIJo/xhDUFRUhoZ2
zNLfaoZA///+//PAj5CH]]></BinaryString>
				<string name="MaterialVariantSerialized"></string>
				<string name="Name">Terrain</string>
				<BinaryString name="PhysicsGrid">AgMAAAAAAAAAAAAAAAA=</BinaryString>
				<CoordinateFrame name="PivotOffset">
					<X>0</X>
					<Y>0</Y>
					<Z>0</Z>
					<R00>1</R00>
					<R01>0</R01>
					<R02>0</R02>
					<R10>0</R10>
					<R11>1</R11>
					<R12>0</R12>
					<R20>0</R20>
					<R21>0</R21>
					<R22>1</R22>
				</CoordinateFrame>
				<float name="Reflectance">0</float>
				<float name="RightParamA">-0.5</float>
				<float name="RightParamB">0.5</float>
				<token name="RightSurface">0</token>
				<token name="RightSurfaceInput">0</token>
				<int name="RootPriority">0</int>
				<Vector3 name="RotVelocity">
					<X>0</X>
					<Y>0</Y>
					<Z>0</Z>
				</Vector3>
				<bool name="ShorelinesUpgraded">true</bool>
				<BinaryString name="SmoothGrid">AQU=</BinaryString>
				<bool name="SmoothVoxelsUpgraded">false</bool>
				<int64 name="SourceAssetId">-1</int64>
				<BinaryString name="Tags"></BinaryString>
				<float name="TopParamA">-0.5</float>
				<float name="TopParamB">0.5</float>
				<token name="TopSurface">3</token>
				<token name="TopSurfaceInput">0</token>
				<float name="Transparency">0</float>
				<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b7263</UniqueId>
				<Vector3 name="Velocity">
					<X>0</X>
					<Y>0</Y>
					<Z>0</Z>
				</Vector3>
				<Color3 name="WaterColor">
					<R>0.0470588282</R>
					<G>0.329411775</G>
					<B>0.360784322</B>
				</Color3>
				<float name="WaterReflectance">1</float>
				<float name="WaterTransparency">0.300000012</float>
				<float name="WaterWaveSize">0.150000006</float>
				<float name="WaterWaveSpeed">10</float>
				<Vector3 name="size">
					<X>2044</X>
					<Y>252</Y>
					<Z>2044</Z>
				</Vector3>
			</Properties>
		</Item>
	`

    for (const part of u.parts) {
        // referent="RBX5B31C42F3B13402B8CC314ACDC0D0975"
        let uid = makeid(15)
        result += `<Item class="Part" referent="RBX5B3${uid}">
        <Properties>
            <bool name="Anchored">${part.flags.includes("anchored") ? true : false}</bool>
            <BinaryString name="AttributesSerialize"></BinaryString>
            <float name="BackParamA">-0.5</float>
            <float name="BackParamB">0.5</float>
            <token name="BackSurface">0</token>
            <token name="BackSurfaceInput">0</token>
            <float name="BottomParamA">-0.5</float>
            <float name="BottomParamB">0.5</float>
            <token name="BottomSurface">0</token>
            <token name="BottomSurfaceInput">0</token>
            <CoordinateFrame name="CFrame">
                <X>${part.pos.x}</X>
                <Y>${part.pos.y}</Y>
                <Z>${part.pos.z}</Z>
                <R00>1</R00>
                <R01>0</R01>
                <R02>0</R02>
                <R10>0</R10>
                <R11>1</R11>
                <R12>0</R12>
                <R20>0</R20>
                <R21>0</R21>
                <R22>1</R22>
            </CoordinateFrame>
            <bool name="CanCollide">${part.flags.includes("no_collision") ? false : true}</bool>
            <bool name="CanQuery">true</bool>
            <bool name="CanTouch">true</bool>
            <SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
            <bool name="CastShadow">${part.flags.includes("no_shadow") ? false : true}</bool>
            <string name="CollisionGroup">Default</string>
            <int name="CollisionGroupId">0</int>
            <Color3uint8 name="Color3uint8">${resolveColorUint8(part.color)}</Color3uint8>
            <PhysicalProperties name="CustomPhysicalProperties">
                <CustomPhysics>false</CustomPhysics>
            </PhysicalProperties>
            <bool name="DefinesCapabilities">false</bool>
            <bool name="EnableFluidForces">true</bool>
            <float name="FrontParamA">-0.5</float>
            <float name="FrontParamB">0.5</float>
            <token name="FrontSurface">0</token>
            <token name="FrontSurfaceInput">0</token>
            <UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
            <float name="LeftParamA">-0.5</float>
            <float name="LeftParamB">0.5</float>
            <token name="LeftSurface">0</token>
            <token name="LeftSurfaceInput">0</token>
            <bool name="Locked">false</bool>
            <bool name="Massless">false</bool>
            <token name="Material">256</token>
            <string name="MaterialVariantSerialized"></string>
            <string name="Name">${part.name ?? "Part"}</string>
            <CoordinateFrame name="PivotOffset">
                <X>0</X>
                <Y>0</Y>
                <Z>0</Z>
                <R00>1</R00>
                <R01>0</R01>
                <R02>0</R02>
                <R10>0</R10>
                <R11>1</R11>
                <R12>0</R12>
                <R20>0</R20>
                <R21>0</R21>
                <R22>1</R22>
            </CoordinateFrame>
            <float name="Reflectance">0</float>
            <float name="RightParamA">-0.5</float>
            <float name="RightParamB">0.5</float>
            <token name="RightSurface">0</token>
            <token name="RightSurfaceInput">0</token>
            <int name="RootPriority">0</int>
            <Vector3 name="RotVelocity">
                <X>0</X>
                <Y>0</Y>
                <Z>0</Z>
            </Vector3>
            <int64 name="SourceAssetId">-1</int64>
            <BinaryString name="Tags"></BinaryString>
            <float name="TopParamA">-0.5</float>
            <float name="TopParamB">0.5</float>
            <token name="TopSurface">0</token>
            <token name="TopSurfaceInput">0</token>
            <float name="Transparency">${1 - part.opacity ?? 0}</float>
            <UniqueId name="UniqueId">${uid}</UniqueId>
            <Vector3 name="Velocity">
                <X>0</X>
                <Y>0</Y>
                <Z>0</Z>
            </Vector3>
            <token name="formFactorRaw">1</token>
            <token name="shape">1</token>
            <Vector3 name="size">
                <X>${part.size.x ?? 1}</X>
                <Y>${part.size.y ?? 1}</Y>
                <Z>${part.size.z ?? 1}</Z>
            </Vector3>
        </Properties>
    </Item>`
    }

	result += `</Item>
	<Item class="TimerService" referent="RBX5070B157087F4140890FEAD869FF3E4C">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">Instance</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70ca</UniqueId>
		</Properties>
	</Item>
	<Item class="SoundService" referent="RBX49F6378C58784C29A02C38AF0FBA6BF0">
		<Properties>
			<token name="AmbientReverb">0</token>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<float name="DistanceFactor">3.32999992</float>
			<float name="DopplerScale">1</float>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">SoundService</string>
			<bool name="RespectFilteringEnabled">true</bool>
			<float name="RolloffScale">1</float>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70b7</UniqueId>
			<token name="VolumetricAudio">1</token>
		</Properties>
	</Item>
	<Item class="VideoCaptureService" referent="RBX1B6812FF04F743C29F331042E8D9FBFE">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">VideoCaptureService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">66f1136f8c2e3d410495003f000002f5</UniqueId>
		</Properties>
	</Item>
	<Item class="NonReplicatedCSGDictionaryService" referent="RBXEA160C83E5CF458F852E35918B3C66B1">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">NonReplicatedCSGDictionaryService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70c3</UniqueId>
		</Properties>
	</Item>
	<Item class="CSGDictionaryService" referent="RBXF7F3CFCD0D1B49FFAF8A99CA72C5E71B">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">CSGDictionaryService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70c4</UniqueId>
		</Properties>
	</Item>
	<Item class="Chat" referent="RBXD67EB0E79B624409B9BCF210403A02EE">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<bool name="BubbleChatEnabled">false</bool>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<bool name="LoadDefaultChat">true</bool>
			<string name="Name">Chat</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70c9</UniqueId>
		</Properties>
	</Item>
	<Item class="Players" referent="RBXE04E4B563B2C4C68954057EDD97C44CE">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="CharacterAutoLoads">true</bool>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<int name="MaxPlayersInternal">12</int>
			<string name="Name">Players</string>
			<int name="PreferredPlayersInternal">56832</int>
			<float name="RespawnTime">5</float>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70cc</UniqueId>
			<bool name="UseStrafingAnimations">false</bool>
		</Properties>
	</Item>
	<Item class="ReplicatedFirst" referent="RBX0F06FED33A6C44FC93DE3689ED273F96">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">ReplicatedFirst</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70d0</UniqueId>
		</Properties>
	</Item>
	<Item class="TweenService" referent="RBX2A8ADC40CB4045B8943EC9B8A4326EE8">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">TweenService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70d2</UniqueId>
		</Properties>
	</Item>
	<Item class="MaterialService" referent="RBX1E963A862A4B4C138FAA94FBFD0A961B">
		<Properties>
			<string name="AsphaltName">Asphalt</string>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="BasaltName">Basalt</string>
			<string name="BrickName">Brick</string>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<string name="CardboardName">Cardboard</string>
			<string name="CarpetName">Carpet</string>
			<string name="CeramicTilesName">CeramicTiles</string>
			<string name="ClayRoofTilesName">ClayRoofTiles</string>
			<string name="CobblestoneName">Cobblestone</string>
			<string name="ConcreteName">Concrete</string>
			<string name="CorrodedMetalName">CorrodedMetal</string>
			<string name="CrackedLavaName">CrackedLava</string>
			<bool name="DefinesCapabilities">false</bool>
			<string name="DiamondPlateName">DiamondPlate</string>
			<string name="FabricName">Fabric</string>
			<string name="FoilName">Foil</string>
			<string name="GlacierName">Glacier</string>
			<string name="GraniteName">Granite</string>
			<string name="GrassName">Grass</string>
			<string name="GroundName">Ground</string>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="IceName">Ice</string>
			<string name="LeafyGrassName">LeafyGrass</string>
			<string name="LeatherName">Leather</string>
			<string name="LimestoneName">Limestone</string>
			<string name="MarbleName">Marble</string>
			<string name="MetalName">Metal</string>
			<string name="MudName">Mud</string>
			<string name="Name">MaterialService</string>
			<string name="PavementName">Pavement</string>
			<string name="PebbleName">Pebble</string>
			<string name="PlasterName">Plaster</string>
			<string name="PlasticName">Plastic</string>
			<string name="RockName">Rock</string>
			<string name="RoofShinglesName">RoofShingles</string>
			<string name="RubberName">Rubber</string>
			<string name="SaltName">Salt</string>
			<string name="SandName">Sand</string>
			<string name="SandstoneName">Sandstone</string>
			<string name="SlateName">Slate</string>
			<string name="SmoothPlasticName">SmoothPlastic</string>
			<string name="SnowName">Snow</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70d3</UniqueId>
			<bool name="Use2022MaterialsXml">true</bool>
			<string name="WoodName">Wood</string>
			<string name="WoodPlanksName">WoodPlanks</string>
		</Properties>
	</Item>
	<Item class="TextChatService" referent="RBX3E978911708146E68F3BA048158A0E70">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="ChatTranslationEnabled">true</bool>
			<bool name="ChatTranslationToggleEnabled">false</bool>
			<token name="ChatVersion">1</token>
			<bool name="CreateDefaultCommands">true</bool>
			<bool name="CreateDefaultTextChannels">true</bool>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">TextChatService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">561b8f7fa30be88804190ca100000302</UniqueId>
		</Properties>
		<Item class="ChatWindowConfiguration" referent="RBXE94F671D36B0437DA3AFA74D4637E4FE">
			<Properties>
				<BinaryString name="AttributesSerialize"></BinaryString>
				<Color3 name="BackgroundColor3">
					<R>0.0980392173</R>
					<G>0.105882354</G>
					<B>0.113725491</B>
				</Color3>
				<double name="BackgroundTransparency">0.2999999999999999889</double>
				<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
				<bool name="DefinesCapabilities">false</bool>
				<bool name="Enabled">true</bool>
				<Font name="FontFace">
					<Family><url>rbxasset://fonts/families/GothamSSm.json</url></Family>
					<Weight>500</Weight>
					<Style>Normal</Style>
					<CachedFaceId><url>rbxasset://fonts/GothamSSm-Medium.otf</url></CachedFaceId>
				</Font>
				<float name="HeightScale">1</float>
				<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
				<token name="HorizontalAlignment">1</token>
				<string name="Name">ChatWindowConfiguration</string>
				<int64 name="SourceAssetId">-1</int64>
				<BinaryString name="Tags"></BinaryString>
				<Color3 name="TextColor3">
					<R>1</R>
					<G>1</G>
					<B>1</B>
				</Color3>
				<int64 name="TextSize">14</int64>
				<Color3 name="TextStrokeColor3">
					<R>0</R>
					<G>0</G>
					<B>0</B>
				</Color3>
				<double name="TextStrokeTransparency">0.5</double>
				<UniqueId name="UniqueId">561b8f7fa30be88804190ca100003064</UniqueId>
				<token name="VerticalAlignment">1</token>
				<float name="WidthScale">1</float>
			</Properties>
		</Item>
		<Item class="ChatInputBarConfiguration" referent="RBX2E3B9CC5B98A452BBA66076395EF6707">
			<Properties>
				<BinaryString name="AttributesSerialize"></BinaryString>
				<bool name="AutocompleteEnabled">true</bool>
				<Color3 name="BackgroundColor3">
					<R>0.0980392173</R>
					<G>0.105882354</G>
					<B>0.113725491</B>
				</Color3>
				<double name="BackgroundTransparency">0.2000000000000000111</double>
				<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
				<bool name="DefinesCapabilities">false</bool>
				<bool name="Enabled">true</bool>
				<Font name="FontFace">
					<Family><url>rbxasset://fonts/families/GothamSSm.json</url></Family>
					<Weight>500</Weight>
					<Style>Normal</Style>
					<CachedFaceId><url>rbxasset://fonts/GothamSSm-Medium.otf</url></CachedFaceId>
				</Font>
				<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
				<token name="KeyboardKeyCode">47</token>
				<string name="Name">ChatInputBarConfiguration</string>
				<Color3 name="PlaceholderColor3">
					<R>0.698039234</R>
					<G>0.698039234</G>
					<B>0.698039234</B>
				</Color3>
				<int64 name="SourceAssetId">-1</int64>
				<BinaryString name="Tags"></BinaryString>
				<Ref name="TargetTextChannel">null</Ref>
				<Color3 name="TextColor3">
					<R>1</R>
					<G>1</G>
					<B>1</B>
				</Color3>
				<int64 name="TextSize">14</int64>
				<Color3 name="TextStrokeColor3">
					<R>0</R>
					<G>0</G>
					<B>0</B>
				</Color3>
				<double name="TextStrokeTransparency">0.5</double>
				<UniqueId name="UniqueId">561b8f7fa30be88804190ca100003065</UniqueId>
			</Properties>
		</Item>
		<Item class="BubbleChatConfiguration" referent="RBX4E02135E8457440EBC2BD192D9663BC9">
			<Properties>
				<string name="AdorneeName">HumanoidRootPart</string>
				<BinaryString name="AttributesSerialize"></BinaryString>
				<Color3 name="BackgroundColor3">
					<R>0.980392158</R>
					<G>0.980392158</G>
					<B>0.980392158</B>
				</Color3>
				<double name="BackgroundTransparency">0.10000000000000000555</double>
				<float name="BubbleDuration">15</float>
				<float name="BubblesSpacing">6</float>
				<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
				<bool name="DefinesCapabilities">false</bool>
				<bool name="Enabled">true</bool>
				<token name="Font">18</token>
				<Font name="FontFace">
					<Family><url>rbxasset://fonts/families/GothamSSm.json</url></Family>
					<Weight>500</Weight>
					<Style>Normal</Style>
					<CachedFaceId><url>rbxasset://fonts/GothamSSm-Medium.otf</url></CachedFaceId>
				</Font>
				<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
				<Vector3 name="LocalPlayerStudsOffset">
					<X>0</X>
					<Y>0</Y>
					<Z>0</Z>
				</Vector3>
				<float name="MaxBubbles">3</float>
				<float name="MaxDistance">100</float>
				<float name="MinimizeDistance">40</float>
				<string name="Name">BubbleChatConfiguration</string>
				<int64 name="SourceAssetId">-1</int64>
				<BinaryString name="Tags"></BinaryString>
				<bool name="TailVisible">true</bool>
				<Color3 name="TextColor3">
					<R>0.223529413</R>
					<G>0.23137255</G>
					<B>0.239215687</B>
				</Color3>
				<int64 name="TextSize">16</int64>
				<UniqueId name="UniqueId">561b8f7fa30be88804190ca100003066</UniqueId>
				<float name="VerticalStudsOffset">0</float>
			</Properties>
			<Item class="UIGradient" referent="RBX6614F008F1BD4C97AF04458887941BBA">
				<Properties>
					<BinaryString name="AttributesSerialize"></BinaryString>
					<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
					<ColorSequence name="Color">0 1 1 1 0 1 1 1 1 0 </ColorSequence>
					<bool name="DefinesCapabilities">false</bool>
					<bool name="Enabled">false</bool>
					<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
					<string name="Name">UIGradient</string>
					<Vector2 name="Offset">
						<X>0</X>
						<Y>0</Y>
					</Vector2>
					<float name="Rotation">0</float>
					<int64 name="SourceAssetId">-1</int64>
					<BinaryString name="Tags"></BinaryString>
					<NumberSequence name="Transparency">0 0 0 1 0 0 </NumberSequence>
					<UniqueId name="UniqueId">66f1136f8c2e3d410495003f000034d6</UniqueId>
				</Properties>
			</Item>
			<Item class="ImageLabel" referent="RBX3F5EB4A8BE8F4007A74AE9FC5AF2EC57">
				<Properties>
					<bool name="Active">false</bool>
					<Vector2 name="AnchorPoint">
						<X>0</X>
						<Y>0</Y>
					</Vector2>
					<BinaryString name="AttributesSerialize"></BinaryString>
					<bool name="AutoLocalize">true</bool>
					<token name="AutomaticSize">0</token>
					<Color3 name="BackgroundColor3">
						<R>1</R>
						<G>1</G>
						<B>1</B>
					</Color3>
					<float name="BackgroundTransparency">0</float>
					<Color3 name="BorderColor3">
						<R>0.105882362</R>
						<G>0.164705887</G>
						<B>0.207843155</B>
					</Color3>
					<token name="BorderMode">0</token>
					<int name="BorderSizePixel">1</int>
					<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
					<bool name="ClipsDescendants">false</bool>
					<bool name="DefinesCapabilities">false</bool>
					<bool name="Draggable">false</bool>
					<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
					<Content name="Image"><null></null></Content>
					<Color3 name="ImageColor3">
						<R>1</R>
						<G>1</G>
						<B>1</B>
					</Color3>
					<Vector2 name="ImageRectOffset">
						<X>0</X>
						<Y>0</Y>
					</Vector2>
					<Vector2 name="ImageRectSize">
						<X>0</X>
						<Y>0</Y>
					</Vector2>
					<float name="ImageTransparency">0</float>
					<bool name="Interactable">true</bool>
					<int name="LayoutOrder">0</int>
					<string name="Name">ImageLabel</string>
					<Ref name="NextSelectionDown">null</Ref>
					<Ref name="NextSelectionLeft">null</Ref>
					<Ref name="NextSelectionRight">null</Ref>
					<Ref name="NextSelectionUp">null</Ref>
					<UDim2 name="Position">
						<XS>0</XS>
						<XO>0</XO>
						<YS>0</YS>
						<YO>0</YO>
					</UDim2>
					<token name="ResampleMode">0</token>
					<Ref name="RootLocalizationTable">null</Ref>
					<float name="Rotation">0</float>
					<token name="ScaleType">0</token>
					<bool name="Selectable">false</bool>
					<token name="SelectionBehaviorDown">0</token>
					<token name="SelectionBehaviorLeft">0</token>
					<token name="SelectionBehaviorRight">0</token>
					<token name="SelectionBehaviorUp">0</token>
					<bool name="SelectionGroup">false</bool>
					<Ref name="SelectionImageObject">null</Ref>
					<int name="SelectionOrder">0</int>
					<UDim2 name="Size">
						<XS>0</XS>
						<XO>100</XO>
						<YS>0</YS>
						<YO>100</YO>
					</UDim2>
					<token name="SizeConstraint">0</token>
					<Rect2D name="SliceCenter">
						<min>
							<X>0</X>
							<Y>0</Y>
						</min>
						<max>
							<X>0</X>
							<Y>0</Y>
						</max>
					</Rect2D>
					<float name="SliceScale">1</float>
					<int64 name="SourceAssetId">-1</int64>
					<BinaryString name="Tags"></BinaryString>
					<UDim2 name="TileSize">
						<XS>1</XS>
						<XO>0</XO>
						<YS>1</YS>
						<YO>0</YO>
					</UDim2>
					<UniqueId name="UniqueId">66f1136f8c2e3d410495003f000034d7</UniqueId>
					<bool name="Visible">true</bool>
					<int name="ZIndex">1</int>
				</Properties>
			</Item>
			<Item class="UICorner" referent="RBX332A12FB8B014F6393AC7DDB798DFCAB">
				<Properties>
					<BinaryString name="AttributesSerialize"></BinaryString>
					<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
					<UDim name="CornerRadius">
						<S>0</S>
						<O>12</O>
					</UDim>
					<bool name="DefinesCapabilities">false</bool>
					<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
					<string name="Name">UICorner</string>
					<int64 name="SourceAssetId">-1</int64>
					<BinaryString name="Tags"></BinaryString>
					<UniqueId name="UniqueId">66f1136f8c2e3d410495003f000034d8</UniqueId>
				</Properties>
			</Item>
			<Item class="UIPadding" referent="RBXAA8958DEF2384BAC8B96BCAB75419894">
				<Properties>
					<BinaryString name="AttributesSerialize"></BinaryString>
					<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
					<bool name="DefinesCapabilities">false</bool>
					<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
					<string name="Name">UIPadding</string>
					<UDim name="PaddingBottom">
						<S>0</S>
						<O>8</O>
					</UDim>
					<UDim name="PaddingLeft">
						<S>0</S>
						<O>8</O>
					</UDim>
					<UDim name="PaddingRight">
						<S>0</S>
						<O>8</O>
					</UDim>
					<UDim name="PaddingTop">
						<S>0</S>
						<O>8</O>
					</UDim>
					<int64 name="SourceAssetId">-1</int64>
					<BinaryString name="Tags"></BinaryString>
					<UniqueId name="UniqueId">7357c66c0f4ac60b04ed9207000033f1</UniqueId>
				</Properties>
			</Item>
		</Item>
	</Item>
	<Item class="PermissionsService" referent="RBX65E3DB9C0B594217BC7E60FDC4B798A7">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">PermissionsService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70d7</UniqueId>
		</Properties>
	</Item>
	<Item class="PlayerEmulatorService" referent="RBX4525AEEFB751486B9E24F6B7A69DE19D">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="CustomPoliciesEnabled">false</bool>
			<bool name="DefinesCapabilities">false</bool>
			<string name="EmulatedCountryCode">US</string>
			<string name="EmulatedGameLocale"></string>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">PlayerEmulatorService</string>
			<bool name="PlayerEmulationEnabled">false</bool>
			<BinaryString name="SerializedEmulatedPolicyInfo"></BinaryString>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70d9</UniqueId>
		</Properties>
	</Item>
	<Item class="StudioData" referent="RBX99BDB258B12F4E2ABD3EC3AB7A6BAF88">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<bool name="EnableScriptCollabByDefaultOnLoad">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">StudioData</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70dc</UniqueId>
		</Properties>
	</Item>
	<Item class="StarterPlayer" referent="RBX1905553FA41C41FD89BD6716E736008B">
		<Properties>
			<bool name="AllowCustomAnimations">true</bool>
			<token name="AnimationCompositorMode">0</token>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<bool name="AutoJumpEnabled">true</bool>
			<token name="AvatarJointUpgrade_Serialized">0</token>
			<float name="CameraMaxZoomDistance">128</float>
			<float name="CameraMinZoomDistance">0.5</float>
			<token name="CameraMode">0</token>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<float name="CharacterJumpHeight">7.19999981</float>
			<float name="CharacterJumpPower">50</float>
			<float name="CharacterMaxSlopeAngle">89</float>
			<bool name="CharacterUseJumpPower">true</bool>
			<float name="CharacterWalkSpeed">16</float>
			<token name="DeathStyle">0</token>
			<bool name="DefinesCapabilities">false</bool>
			<token name="DevCameraOcclusionMode">0</token>
			<token name="DevComputerCameraMovementMode">0</token>
			<token name="DevComputerMovementMode">0</token>
			<token name="DevTouchCameraMovementMode">0</token>
			<token name="DevTouchMovementMode">0</token>
			<token name="EnableDynamicHeads">0</token>
			<bool name="EnableMouseLockOption">true</bool>
			<int64 name="GameSettingsAssetIDFace">0</int64>
			<int64 name="GameSettingsAssetIDHead">0</int64>
			<int64 name="GameSettingsAssetIDLeftArm">0</int64>
			<int64 name="GameSettingsAssetIDLeftLeg">0</int64>
			<int64 name="GameSettingsAssetIDPants">0</int64>
			<int64 name="GameSettingsAssetIDRightArm">0</int64>
			<int64 name="GameSettingsAssetIDRightLeg">0</int64>
			<int64 name="GameSettingsAssetIDShirt">0</int64>
			<int64 name="GameSettingsAssetIDTeeShirt">0</int64>
			<int64 name="GameSettingsAssetIDTorso">0</int64>
			<token name="GameSettingsAvatar">1</token>
			<token name="GameSettingsR15Collision">0</token>
			<NumberRange name="GameSettingsScaleRangeBodyType">0 1 </NumberRange>
			<NumberRange name="GameSettingsScaleRangeHead">0.95 1 </NumberRange>
			<NumberRange name="GameSettingsScaleRangeHeight">0.9 1.05 </NumberRange>
			<NumberRange name="GameSettingsScaleRangeProportion">0 1 </NumberRange>
			<NumberRange name="GameSettingsScaleRangeWidth">0.7 1 </NumberRange>
			<float name="HealthDisplayDistance">100</float>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<token name="HumanoidStateMachineMode">0</token>
			<bool name="LoadCharacterAppearance">true</bool>
			<token name="LoadCharacterLayeredClothing">0</token>
			<string name="Name">StarterPlayer</string>
			<float name="NameDisplayDistance">100</float>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70dd</UniqueId>
			<bool name="UserEmotesEnabled">true</bool>
		</Properties>
		<Item class="StarterPlayerScripts" referent="RBXA528FE24970F4461A0B2D3C9A1AA0B38">
			<Properties>
				<BinaryString name="AttributesSerialize"></BinaryString>
				<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
				<bool name="DefinesCapabilities">false</bool>
				<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
				<string name="Name">StarterPlayerScripts</string>
				<int64 name="SourceAssetId">-1</int64>
				<BinaryString name="Tags"></BinaryString>
				<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b7261</UniqueId>
			</Properties>
		</Item>
		<Item class="StarterCharacterScripts" referent="RBXB98759E8665648B2B18E328CEEA90115">
			<Properties>
				<BinaryString name="AttributesSerialize"></BinaryString>
				<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
				<bool name="DefinesCapabilities">false</bool>
				<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
				<string name="Name">StarterCharacterScripts</string>
				<int64 name="SourceAssetId">-1</int64>
				<BinaryString name="Tags"></BinaryString>
				<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b7260</UniqueId>
			</Properties>
		</Item>
	</Item>
	<Item class="StarterPack" referent="RBXEAC0187C91DC4414998F61D3CF679A9C">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">StarterPack</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70de</UniqueId>
		</Properties>
	</Item>
	<Item class="StarterGui" referent="RBXCE6FE041372D4ACB9FE53FECF0C4ACEF">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">StarterGui</string>
			<bool name="ResetPlayerGuiOnSpawn">true</bool>
			<token name="RtlTextSupport">0</token>
			<token name="ScreenOrientation">2</token>
			<bool name="ShowDevelopmentGui">true</bool>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70df</UniqueId>
			<token name="VirtualCursorMode">0</token>
		</Properties>
	</Item>
	<Item class="LocalizationService" referent="RBXE4C334013C6F4823A56B0D5F0B08617C">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">LocalizationService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70e1</UniqueId>
		</Properties>
	</Item>
	<Item class="TeleportService" referent="RBXAF186469B6914623BBEBB9F8FBF70698">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">Teleport Service</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70e5</UniqueId>
		</Properties>
	</Item>
	<Item class="CollectionService" referent="RBX5005F967555E4F98A446CA3E995744AE">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">CollectionService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70e7</UniqueId>
		</Properties>
	</Item>
	<Item class="PhysicsService" referent="RBX4E0D6744C23342E489B47554BA40C515">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">PhysicsService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70e8</UniqueId>
		</Properties>
	</Item>
	<Item class="InsertService" referent="RBXAC4E7CF115AA49DE9853A1A13152A998">
		<Properties>
			<bool name="AllowClientInsertModels">false</bool>
			<bool name="AllowInsertFreeModels">false</bool>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">InsertService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70ec</UniqueId>
		</Properties>
		<Item class="StringValue" referent="RBX93E50D189C3A41AAAEED1439C0D920BD">
			<Properties>
				<BinaryString name="AttributesSerialize"></BinaryString>
				<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
				<bool name="DefinesCapabilities">false</bool>
				<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
				<string name="Name">InsertionHash</string>
				<int64 name="SourceAssetId">-1</int64>
				<BinaryString name="Tags"></BinaryString>
				<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b7262</UniqueId>
				<string name="Value">{2B2BD9BA-60EB-47DF-A6F5-08D4362F1C78}</string>
			</Properties>
		</Item>
	</Item>
	<Item class="GamePassService" referent="RBX5DB0CBEB637C43498881BCEB638F8F46">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">GamePassService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70ed</UniqueId>
		</Properties>
	</Item>
	<Item class="Debris" referent="RBX643DB80C78F147C28109C6431BE5ACD8">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<int name="MaxItems">1000</int>
			<string name="Name">Debris</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70ee</UniqueId>
		</Properties>
	</Item>
	<Item class="CookiesService" referent="RBX9D6423F6A60E4EC58867AC95AAED9DEE">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">CookiesService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70ef</UniqueId>
		</Properties>
	</Item>
	<Item class="VRService" referent="RBXC39745EF3B994FB3A68BF2BAD3461ACC">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">VRService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70f9</UniqueId>
		</Properties>
	</Item>
	<Item class="ContextActionService" referent="RBX3BACCDC85E0C483DAFEC9ECFE93FC9A3">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">ContextActionService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70fb</UniqueId>
		</Properties>
	</Item>
	<Item class="ScriptService" referent="RBX4DE830B2BEDD4308B23D3F3EEA4615C5">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">Instance</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70fd</UniqueId>
		</Properties>
	</Item>
	<Item class="AssetService" referent="RBXD644682B7A474E7FAF67D2DAED242F27">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">AssetService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70fe</UniqueId>
		</Properties>
	</Item>
	<Item class="TouchInputService" referent="RBXDFFF5364DADE4A7EAC1A986EF7092EEA">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">TouchInputService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b70ff</UniqueId>
		</Properties>
	</Item>
	<Item class="AnalyticsService" referent="RBXA77D283C52844E9EB4BF45E4CB753278">
		<Properties>
			<string name="ApiKey"></string>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">AnalyticsService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b7102</UniqueId>
		</Properties>
	</Item>
	<Item class="Selection" referent="RBX097EB5E2CF854BC59084303DF1793E5E">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">Selection</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b7105</UniqueId>
		</Properties>
	</Item>
	<Item class="ServerScriptService" referent="RBXCC536230A155472481B932B6BB166D14">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<bool name="LoadStringEnabled">false</bool>
			<string name="Name">ServerScriptService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b7106</UniqueId>
		</Properties>
	</Item>
	<Item class="ServerStorage" referent="RBX73BD6474937E4CC3806A20CCC183D705">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">ServerStorage</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b7107</UniqueId>
		</Properties>
	</Item>
	<Item class="ReplicatedStorage" referent="RBX2126225E81F2484E80C86F5ABBFE6D89">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">ReplicatedStorage</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b7108</UniqueId>
		</Properties>
	</Item>
	<Item class="LuaWebService" referent="RBX915AF68D603840D3998D70976043E8A7">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">Instance</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b710f</UniqueId>
		</Properties>
	</Item>
	<Item class="ProcessInstancePhysicsService" referent="RBXB5B2FE95F2D14C5FA7B049FC1229D7DD">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">ProcessInstancePhysicsService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b7110</UniqueId>
		</Properties>
	</Item>
	<Item class="LanguageService" referent="RBX2D065361029D4E949F7DCDBD66B5695B">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">LanguageService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b7257</UniqueId>
		</Properties>
	</Item>
	<Item class="Lighting" referent="RBX575ACA9AACD842538CB9FB3211AE0357">
		<Properties>
			<Color3 name="Ambient">
				<R>0.541176498</R>
				<G>0.541176498</G>
				<B>0.541176498</B>
			</Color3>
			<BinaryString name="AttributesSerialize">AQAAABIAAABVc2VDdXJyZW50TGlnaHRpbmcDAA==</BinaryString>
			<float name="Brightness">2</float>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<Color3 name="ColorShift_Bottom">
				<R>0</R>
				<G>0</G>
				<B>0</B>
			</Color3>
			<Color3 name="ColorShift_Top">
				<R>0</R>
				<G>0</G>
				<B>0</B>
			</Color3>
			<bool name="DefinesCapabilities">false</bool>
			<float name="EnvironmentDiffuseScale">0</float>
			<float name="EnvironmentSpecularScale">0</float>
			<float name="ExposureCompensation">0</float>
			<Color3 name="FogColor">
				<R>0.752941251</R>
				<G>0.752941251</G>
				<B>0.752941251</B>
			</Color3>
			<float name="FogEnd">100000</float>
			<float name="FogStart">0</float>
			<float name="GeographicLatitude">41.7332993</float>
			<bool name="GlobalShadows">true</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">Lighting</string>
			<Color3 name="OutdoorAmbient">
				<R>0.501960814</R>
				<G>0.501960814</G>
				<B>0.501960814</B>
			</Color3>
			<bool name="Outlines">false</bool>
			<float name="ShadowSoftness">0.200000003</float>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<token name="Technology">3</token>
			<string name="TimeOfDay">14:00:00</string>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b7135</UniqueId>
		</Properties>
	</Item>
	<Item class="LodDataService" referent="RBX12636F87F60D45828093CE497CCB13F0">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">Instance</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b7138</UniqueId>
		</Properties>
	</Item>
	<Item class="ServiceVisibilityService" referent="RBXA30780FC149C4EA986A7201AEAEE04E6">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<BinaryString name="HiddenServices">AAAAAA==</BinaryString>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">ServiceVisibilityService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">66f1136f8c2e3d410495003f000032a9</UniqueId>
			<BinaryString name="VisibleServices">AAAAAA==</BinaryString>
		</Properties>
	</Item>
	<Item class="HttpService" referent="RBX4051BA9E03704621ADDDDF9DA952F590">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<bool name="HttpEnabled">false</bool>
			<string name="Name">HttpService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b725e</UniqueId>
		</Properties>
	</Item>
	<Item class="ProximityPromptService" referent="RBXA12E2518818645429C5FD6523E52568F">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<bool name="Enabled">true</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<int name="MaxPromptsVisible">16</int>
			<string name="Name">ProximityPromptService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">4a6d4b8a9a3e912304bde857000034d6</UniqueId>
		</Properties>
	</Item>
	<Item class="Teams" referent="RBX0C97DB02EF48422AB489E0643F239846">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">Teams</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004e7e77</UniqueId>
		</Properties>
	</Item>
	<Item class="TestService" referent="RBXDBBE0353CCB44DD7A421BFEAFE119CF0">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<bool name="AutoRuns">true</bool>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<string name="Description"></string>
			<bool name="ExecuteWithStudioRun">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<bool name="IsSleepAllowed">true</bool>
			<string name="Name">TestService</string>
			<int name="NumberOfPlayers">0</int>
			<double name="SimulateSecondsLag">0</double>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<double name="Timeout">10</double>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b7264</UniqueId>
		</Properties>
	</Item>
	<Item class="VirtualInputManager" referent="RBX28BA357B899043BD8A9A9FF4555F0CAC">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">VirtualInputManager</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">44b188dace632b4702e9c68d004b7265</UniqueId>
		</Properties>
	</Item>
	<Item class="UGCAvatarService" referent="RBX3E3F49937BCE4F64A95878DC9573E13D">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<SecurityCapabilities name="Capabilities">0</SecurityCapabilities>
			<bool name="DefinesCapabilities">false</bool>
			<UniqueId name="HistoryId">00000000000000000000000000000000</UniqueId>
			<string name="Name">UGCAvatarService</string>
			<int64 name="SourceAssetId">-1</int64>
			<BinaryString name="Tags"></BinaryString>
			<UniqueId name="UniqueId">6cdb925f685a62ff05312e9d000037b1</UniqueId>
		</Properties>
	</Item>
	<SharedStrings>
		<SharedString md5="yuZpQdnvvUBOTYh1jqZ2cA=="></SharedString>
	</SharedStrings>
</roblox>`

    return result
}

/*
function toUniversal(dataRaw) {
    const data = dataRaw.split('\n')
    const result = uF.createUniversal("roblox")

    return result
}
*/

module.exports = { fromUniversal, metadata }