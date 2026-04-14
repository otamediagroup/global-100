import { ImageResponse } from 'next/og';
import { getLeaderBySlug } from '@/data/leaders';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#0F1720',
            backgroundImage:
              'linear-gradient(135deg, #0F1720 0%, #1A2332 100%)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <div
              style={{
                fontSize: 72,
                fontWeight: 'bold',
                color: '#C9A84C',
                marginBottom: 20,
              }}
            >
              The Global 100
            </div>
            <div
              style={{
                fontSize: 48,
                color: '#FFFFFF',
                marginBottom: 20,
              }}
            >
              Sustainable Leadership Index
            </div>
            <div
              style={{
                fontSize: 32,
                color: '#056773',
              }}
            >
              OTA Media Group
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }

  const leader = getLeaderBySlug(slug);

  if (!leader) {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#0F1720',
          }}
        >
          <div style={{ fontSize: 48, color: '#C9A84C' }}>Leader not found</div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: '#0F1720',
          backgroundImage:
            'linear-gradient(135deg, #0F1720 0%, #1A2332 100%)',
          padding: 60,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 24,
              color: '#056773',
              marginBottom: 10,
              fontWeight: 600,
            }}
          >
            The Global 100 | Rank #{leader.rank}
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 'bold',
              color: '#FFFFFF',
              marginBottom: 20,
            }}
          >
            {leader.name}
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#C9A84C',
              marginBottom: 10,
            }}
          >
            {leader.role} @ {leader.company}
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#A0A0A0',
            }}
          >
            {leader.country} • {leader.sector}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 40,
            borderTop: '2px solid rgba(201, 168, 76, 0.3)',
          }}
        >
          <div style={{ display: 'flex', gap: 40 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 'bold',
                  color: '#C9A84C',
                }}
              >
                {leader.totalScore}
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: '#A0A0A0',
                }}
              >
                Power Score
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: '#C9A84C',
            }}
          >
            global-100.otamediagroup.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
