<footer class="bleed-bg palette-dry-sage flow" style="--flow-space: 1em;">
    <div class="infos grid-fluid">
    <div>
        <p>
        {% icon "googlemaps" %}{{ vars.address }}<br>
        <a href="{{ data.gmaps }}" target="_blank" rel="noopener noreferrer" style="white-space: pre-line">{{ data.address | safe }}</a>
        </p>
    </div>
    <div>
        <p>
        Whatsapp<br>
        {{ data.whatsapp }}
        </p>
        <p>
        Email<br>
        {{ data.email | emailLink }}
        </p>
    </div>
    <div>
        <p>
        CIR. 056048-AGR-00008<br>
        CIN. IT056048B5DGMYX8B5<br>
        IVA. 02350170565
        </p>
    </div>
    <div>
        <p><a href="{{ data.facebook }}" target="_blank" rel="noopener noreferrer">{% icon "facebook" %} Facebook</a></p>
        <p><a href="{{ data.instagram }}" target="_blank" rel="noopener noreferrer">{% icon "instagram" %} Instagram</a></p>
    </div>
    </div>
    <div class="bottom center intrinsic text flow">
    <p class="copyright">{{globalSettings.siteName}} &copy; {{data.year}}</p>
    <p style="--flow-space: 0;">{{vars.poweredBy | safe}}</p>
    </div>
</footer>
